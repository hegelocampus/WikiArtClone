require 'test_helper'

class Api::ArtworksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_artworks_index_url
    assert_response :success
  end

  test "should get show" do
    get api_artworks_show_url
    assert_response :success
  end

end
