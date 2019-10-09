require 'test_helper'

class Api::ArtistsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_artists_index_url
    assert_response :success
  end

  test "should get show" do
    get api_artists_show_url
    assert_response :success
  end

  test "should get create" do
    get api_artists_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_artists_edit_url
    assert_response :success
  end

end
