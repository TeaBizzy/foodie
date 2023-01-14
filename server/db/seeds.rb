# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

## Seeds example data, can be removed safetly.
puts "Create examples!"
Example.destroy_all
ex1 = Example.create(name: 'Ruby', price_cents: 100000, is_rare: true)
ex2 = Example.create(name: 'Topaz', price_cents: 800, is_rare: false)
ex3 = Example.create(name: 'Sapphire', price_cents: 80000, is_rare: true)

## Create users.
puts "Creating users!"
User.destroy_all

## Do not touch these accounts as tests rely on them.
user1 = User.create(first_name: 'John', last_name: 'Doe', email: 'john_doe@email.com', password: 'password', img_url: 'https://i.imgur.com/avMgDEG.png')
user2 = User.create(first_name: 'Jane', last_name: 'Smith', email: 'jane_smith@email.com', password: 'password', img_url: 'https://i.imgur.com/vMY7lhj.png')

## The below can be modified safely.
user3 = User.create(first_name: 'Kelvin', last_name: 'Huang', email: 'kelvin.huang98@hotmail.com', password: 'password', img_url: 'https://i.imgur.com/6U9WNtQ.png')
user4 = User.create(first_name: 'Stefan', last_name: 'Talbot', email: 'satalbot@protonmail.com', password: 'password', img_url: 'https://i.imgur.com/bVrBJ3i.png')
user5 = User.create(first_name: 'Rahim', last_name: 'Jamal', email: 'rahimj2196@gmail.com', password: 'password', img_url: 'https://i.imgur.com/AK54oyB.png')

## Create Sessions.
puts "Creating Sessions"
Session.destroy_all
UserSession.destroy_all

# New Session
session1 = Session.create(reservation: '20/01/2023 6:00 PM'.to_time)
user_session1 = UserSession.create(session_id: session1.id, user_id: user4.id, status: 0)
user_session2 = UserSession.create(session_id: session1.id, user_id: user3.id, status: 0)

# Finished Session
session2 = Session.create(reservation: '30/01/2023 12:00 PM'.to_time)
user_session3 = UserSession.create(session_id: session2.id, user_id: user4.id, status: 2)
user_session4 = UserSession.create(session_id: session2.id, user_id: user5.id, status: 2)

# Pending Session
session3 = Session.create(reservation: '19/01/2023 10:00 AM'.to_time)
user_session5 = UserSession.create(session_id: session3.id, user_id: user4.id, status: 1)
user_session6 = UserSession.create(session_id: session3.id, user_id: user1.id, status: 0)

## Create Restaurants.
puts "Creating Restaurants"
Restaurant.destroy_all
OperatingTime.destroy_all
Swipe.destroy_all

restaurant1 = Restaurant.create(
  name: 'Table For 2 Steak House', 
  address: '49 Victoria St W, Alliston, ON L9R 1S9, Canada',
  phone_number: '(705) 250-3400',
  lat: 44.1534858,
  lng: -79.8708408,
  rating: 4.6, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj424Pf9cvnEGZjwCIs9iaDpfg5-tMzhzM0zSCCgSiflEo4ylSJtFWdC11K_p18knW_PAWtTQHJA608AnfrmbRl_tpJhQugsMsQ=s1600-w600', 
  website: nil,
  session_id: session1.id
)


operating_time1 = OperatingTime.create(restaurant_id: restaurant1.id, day: 1, open: "16:00".to_time, close: "21:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant1.id, day: 2, open: "16:00".to_time, close: "21:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant1.id, day: 3, open: "16:00".to_time, close: "21:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant1.id, day: 4, open: "16:00".to_time, close: "21:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant1.id, day: 5, open: "16:00".to_time, close: "21:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant1.id, day: 6, open: "16:00".to_time, close: "21:00".to_time)


restaurant2 = Restaurant.create(
  name: 'All star Roadhouse Bar & Grill', 
  address: '59 Victoria St W, Alliston, ON L9R 1T1, Canada',
  phone_number: '(705) 805-2521',
  lat: 44.1534217,
  lng: -79.871115,
  rating: 3.9, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj41X_9FHXBmAFrfqsv_7st7znqpnnIucd106LDuUy9VXXajZElVttURgL4khHuRkn4spGewleGGUJ9XvX5575cqTGstm1tfmpbg=s1600-w600', 
  website: 'https://barandgrillalliston.ca/',
  session_id: session1.id
)


operating_time1 = OperatingTime.create(restaurant_id: restaurant2.id, day: 1, open: "11:00".to_time, close: "00:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant2.id, day: 2, open: "11:00".to_time, close: "00:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant2.id, day: 3, open: "11:00".to_time, close: "00:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant2.id, day: 4, open: "11:00".to_time, close: "00:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant2.id, day: 5, open: "11:00".to_time, close: "00:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant2.id, day: 6, open: "11:00".to_time, close: "00:00".to_time)
operating_time7 = OperatingTime.create(restaurant_id: restaurant2.id, day: 7, open: "11:00".to_time, close: "00:00".to_time)

restaurant3 = Restaurant.create(
  name: 'Taqueria El Norte', 
  address: '69 Victoria St W, Alliston, ON L9R 1T1, Canada',
  phone_number: '(705) 250-7528',
  lat: 44.1533802,
  lng: -79.8712681,
  rating: 4.6, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj42AIApvMhcvsQVSu_ttzBCS-Q1RtG1EqFlhvcPMzjA1R2u7owdtAT-InCaUk1UD7OqJ6qSApHtTDpzyvjXtzR8kQM8kiVwR-Ro=s1600-w600', 
  website: 'http://www.taqueriaelnorte.com/',
  session_id: session2.id
)


Swipe.create(restaurant_id: restaurant3.id, is_approved: true)
Swipe.create(restaurant_id: restaurant3.id, is_approved: true)

operating_time1 = OperatingTime.create(restaurant_id: restaurant3.id, day: 1, open: "11:00".to_time, close: "20:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant3.id, day: 2, open: "11:00".to_time, close: "20:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant3.id, day: 3, open: "11:00".to_time, close: "20:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant3.id, day: 4, open: "11:00".to_time, close: "20:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant3.id, day: 5, open: "11:00".to_time, close: "21:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant3.id, day: 6, open: "11:00".to_time, close: "21:00".to_time)

restaurant4 = Restaurant.create(
  name: 'Sara', 
  address: '98 Portland St, Toronto, ON M5V 2N2, Canada',
  phone_number: '(416) 985-5721',
  lat: 43.6452005,
  lng: -79.4006612,
  rating: 4.7, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj42k7_35K5Fngf6uYFbS8-BJhUKnuMlz5DV5yiV_39C91qMguitgicQmpUFOXt87iOBAFjtofKE43rbt5mnvW3ER8ThGYkG1FG8=s1600-w600', 
  website: 'http://www.sara.restaurant/',
  session_id: session3.id
)

Swipe.create(restaurant_id: restaurant4.id, is_approved: false)

operating_time1 = OperatingTime.create(restaurant_id: restaurant4.id, day: 2, open: "17:00".to_time, close: "22:30".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant4.id, day: 3, open: "17:00".to_time, close: "22:30".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant4.id, day: 4, open: "17:00".to_time, close: "23:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant4.id, day: 5, open: "17:00".to_time, close: "23:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant4.id, day: 6, open: "17:00".to_time, close: "23:00".to_time)

restaurant5 = Restaurant.create(
  name: "The Burger's Priest", 
  address: '579 King St W, Toronto, ON M5V 1M1, Canada',
  phone_number: '(647) 478-6729',
  lat: 43.644361,
  lng: -79.3997519,
  rating: 4.4, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj403wfy30LdMGcdMbsDzZi2PFJACPVuHKqufXiw3WeC1vVz-07Y993VQKzDC_dMETHmdJcQJJUlf92VDjD0v8zm0-IaVr0gazuQ=s1600-w600', 
  website: 'https://www.theburgerspriest.com/',
  session_id: session3.id
)

Swipe.create(restaurant_id: restaurant5.id, is_approved: true)

operating_time2 = OperatingTime.create(restaurant_id: restaurant5.id, day: 1, open: "11:00".to_time, close: "00:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant5.id, day: 2, open: "11:00".to_time, close: "00:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant5.id, day: 3, open: "11:00".to_time, close: "00:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant5.id, day: 4, open: "11:00".to_time, close: "02:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant5.id, day: 5, open: "11:00".to_time, close: "04:00".to_time)
operating_time7 = OperatingTime.create(restaurant_id: restaurant5.id, day: 6, open: "11:00".to_time, close: "04:00".to_time)
operating_time1 = OperatingTime.create(restaurant_id: restaurant5.id, day: 0, open: "11:00".to_time, close: "00:00".to_time)

restaurant6 = Restaurant.create(
  name: "Claudio's", 
  address: '191 James St N, Hamilton, ON L8R 2K9, Canada',
  phone_number: '(289) 389-6699',
  lat: 43.2615929,
  lng: -79.8670459,
  rating: 4.6, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj41pmlRmTKsWQSpHef7GRdjEAKZYwtV2Ta5h-W0-7ywvTZSxBvLYaThRNxF8mYp2DUG08qeK8a8SpLP7xBDl01HRjuWU0vHzcRw=s1600-w600', 
  website: 'http://claudios.ca/',
  session_id: session3.id
)

Swipe.create(restaurant_id: restaurant6.id, is_approved: true)

operating_time1 = OperatingTime.create(restaurant_id: restaurant6.id, day: 0, open: "17:00".to_time, close: "21:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant6.id, day: 1, open: "12:00".to_time, close: "14:30".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant6.id, day: 1, open: "17:00".to_time, close: "21:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant6.id, day: 4, open: "12:00".to_time, close: "14:30".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant6.id, day: 4, open: "17:00".to_time, close: "21:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant6.id, day: 5, open: "12:00".to_time, close: "14:30".to_time)
operating_time7 = OperatingTime.create(restaurant_id: restaurant6.id, day: 5, open: "17:00".to_time, close: "22:00".to_time)
operating_time8 = OperatingTime.create(restaurant_id: restaurant6.id, day: 6, open: "17:00".to_time, close: "22:00".to_time)

restaurant7 = Restaurant.create(
  name: "Born & Raised", 
  address: '224 James St N, Hamilton, ON L8R 2L3, Canada',
  phone_number: '(289) 768-5233',
  lat: 43.2623778,
  lng: -79.8663995,
  rating: 4.5, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj42UfuAKACOzm8pMCZ0SyJBcDdECm6cBJ3ka7Aykp8poSnXXtsbQ3yaaoNnRmfO-2bXst-Vb4U2Bj-GPVZX1um4vFDxFIRhSDbI=s1600-w600', 
  website: 'https://www.bornandraisedrestaurant.com/',
  session_id: session3.id
)

Swipe.create(restaurant_id: restaurant7.id, is_approved: true)

operating_time1 = OperatingTime.create(restaurant_id: restaurant7.id, day: 0, open: "17:00".to_time, close: "02:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant7.id, day: 5, open: "17:00".to_time, close: "02:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant7.id, day: 6, open: "17:00".to_time, close: "02:00".to_time)

restaurant8 = Restaurant.create(
  name: "Wanda's Caribbean Kitchen", 
  address: '1842 Lakeshore Rd W, Mississauga, ON L5J 1J7, Canada',
  phone_number: '(905) 822-3002',
  lat: 43.5150301,
  lng: -79.6249326,
  rating: 4.7, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj41Je7pb2CNdcJxk8bCznUKMxvWiv1LQ9tu72SoSnhaIHMfJcbRq83zfGUQyjXW_h2jJYwt-8eg5_YkzW6Qx-fSEiphnbtqS_X4=s1600-w600', 
  website: 'http://www.wandascaribbeankitchen.com/'
)

operating_time1 = OperatingTime.create(restaurant_id: restaurant8.id, day: 1, open: "10:30".to_time, close: "20:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant8.id, day: 2, open: "10:30".to_time, close: "20:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant8.id, day: 3, open: "10:30".to_time, close: "20:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant8.id, day: 4, open: "10:30".to_time, close: "20:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant8.id, day: 5, open: "10:30".to_time, close: "20:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant8.id, day: 6, open: "10:30".to_time, close: "20:00".to_time)


restaurant9 = Restaurant.create(
  name: "Momiji Japanese Restaurant", 
  address: '1801 Lakeshore Rd W, Mississauga, ON L5J 1H6, Canada',
  phone_number: '(905) 823-8430',
  lat: 43.5163951,
  lng: -79.6248554,
  rating: 4.3, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj41FDppE4jNTLf070pMF77ejFxVCugKpzyQCQSg5h9cFIc_oM-fDDitHpQ7_BfL-poawROaaaqa5SlpEnT6sPxMG7UApN8Pzr5c=s1600-w600', 
  website: 'https://www.momijiclarkson.com/'
)

operating_time1 = OperatingTime.create(restaurant_id: restaurant9.id, day: 0, open: "12:00".to_time, close: "22:00".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant9.id, day: 1, open: "11:30".to_time, close: "22:00".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant9.id, day: 3, open: "11:30".to_time, close: "22:00".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant9.id, day: 4, open: "11:30".to_time, close: "22:00".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant9.id, day: 5, open: "11:30".to_time, close: "22:00".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant9.id, day: 6, open: "12:00".to_time, close: "22:00".to_time)

restaurant10 = Restaurant.create(
  name: "Treadwell Cuisine", 
  address: '114 Queen St, Niagara-on-the-Lake, ON L0S 1J0, Canada',
  phone_number: '(905) 934-9797',
  lat: 43.25639719999999,
  lng: -79.0744454,
  rating: 4.5, 
  img_url: 'https://lh3.googleusercontent.com/places/AJDFj40vTsM6zkvsH5At754CTS_iURt_lRZ88EfgsMMUdDeHwWJMXU3vb5DNv89cNpzFlyeavtRdMxKcNjGtaiXm8N57EtuVfIahG8E=s1600-w600', 
  website: 'https://www.treadwellcuisine.com/'
)

operating_time1 = OperatingTime.create(restaurant_id: restaurant10.id, day: 0, open: "08:00".to_time, close: "20:45".to_time)
operating_time2 = OperatingTime.create(restaurant_id: restaurant10.id, day: 1, open: "08:00".to_time, close: "20:45".to_time)
operating_time3 = OperatingTime.create(restaurant_id: restaurant10.id, day: 2, open: "08:00".to_time, close: "20:45".to_time)
operating_time4 = OperatingTime.create(restaurant_id: restaurant10.id, day: 3, open: "08:00".to_time, close: "20:45".to_time)
operating_time5 = OperatingTime.create(restaurant_id: restaurant10.id, day: 4, open: "08:00".to_time, close: "20:45".to_time)
operating_time6 = OperatingTime.create(restaurant_id: restaurant10.id, day: 5, open: "08:00".to_time, close: "20:45".to_time)
operating_time7 = OperatingTime.create(restaurant_id: restaurant10.id, day: 6, open: "08:00".to_time, close: "20:45".to_time)

