require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "GET /only" do
    it "returns http success" do
      get "/session/only"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/session/create"
      expect(response).to have_http_status(:success)
    end
  end

end
