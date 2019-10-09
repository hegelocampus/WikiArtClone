require 'test_helper'

class Api::SelectorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_selectors_index_url
    assert_response :success
  end

  test "should get show" do
    get api_selectors_show_url
    assert_response :success
  end

end
