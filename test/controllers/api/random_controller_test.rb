require 'test_helper'

class Api::RandomControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_random_show_url
    assert_response :success
  end

end
