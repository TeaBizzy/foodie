require 'google_places'
require 'dotenv'

# Loads the .env file
Dotenv.load

class PlacesParser < GooglePlaces::Client
  private attr_accessor :coordinates
  private attr_reader :radius

  def initialize(lat, lng, radius)
    self.coordinates = {lat: lat, lng: lng}
    self.radius = radius
    super(ENV['PLACES_KEY'])
  end

  private def radius=(radius)
    @radius = [radius, 5000].min
  end
  
  # -- METHODS -- #

  # Returns place data that is consumable
  def get_places
    raw_places = self.request_restaurants
    self.parse_raw_places(raw_places)
  end

  # Requests unparsed places from Google's API
  private def request_restaurants
    spots(@coordinates[:lat], @coordinates[:lng], types: 'restaurant', radius: @radius)
  end

  # Parses raw place data from Google's API for the app to consume
  private def parse_raw_places(places)
    # Filter places
    results = places.select do |place|
      place.rating != nil && 
      place.photos.length > 0 && 
      place.opening_hours != nil
    end

    # Sort places by highest > lowest rating
    results = results.sort_by { |place| place.rating }.reverse!

    # Parse the raw places into a hash.
    results.map do |place|
      details = get_details(place.place_id)
      parsed_place = {:id => place.place_id, :name => place.name, :rating => place.rating, :lat => place.lat, :lng => place.lng}
      parsed_place.merge(details)
    end
  end

  # Returns a hash containing place details and photo
  private def get_details(place_id)
    # Get place details
    details = self.spot(place_id, fields:'formatted_address,formatted_phone_number,opening_hours,website')
    # Get the main img for a place
    photo = self.spot(place_id).photos[0].fetch_url(600)

    # Returns the details and main img as a hash.
    {:address => details.formatted_address, :phone_number => details.formatted_phone_number, :open_hours => details.opening_hours['periods'], :img => photo, :website => details.website}
  end
end