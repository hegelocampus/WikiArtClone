require 'test_helper'

class Api::AllSelectorsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_all_selectors_show_url
    assert_response :success
  end

end
