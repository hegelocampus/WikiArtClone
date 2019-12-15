# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_14_200030) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "art_movements", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "artist_selectors", force: :cascade do |t|
    t.string "selector_type", null: false
    t.bigint "selector_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["selector_type", "selector_id"], name: "index_artist_selectors_on_selector_type_and_selector_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "birth_date", default: "unknown"
    t.string "death_date"
    t.string "wiki_url"
    t.bigint "nationality_id"
    t.bigint "school_id"
    t.bigint "field_id"
    t.bigint "art_movement_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["art_movement_id"], name: "index_artists_on_art_movement_id"
    t.index ["field_id"], name: "index_artists_on_field_id"
    t.index ["name"], name: "index_artists_on_name"
    t.index ["nationality_id"], name: "index_artists_on_nationality_id"
    t.index ["school_id"], name: "index_artists_on_school_id"
  end

  create_table "artwork_selectors", force: :cascade do |t|
    t.string "selector_type", null: false
    t.bigint "selector_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["selector_type", "selector_id"], name: "index_artwork_selectors_on_selector_type_and_selector_id"
  end

  create_table "artworks", force: :cascade do |t|
    t.string "name"
    t.string "date"
    t.bigint "style_id", null: false
    t.bigint "genre_id", null: false
    t.bigint "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "famous", default: false
    t.index ["artist_id"], name: "index_artworks_on_artist_id"
    t.index ["genre_id"], name: "index_artworks_on_genre_id"
    t.index ["name"], name: "index_artworks_on_name"
    t.index ["style_id"], name: "index_artworks_on_style_id"
  end

  create_table "fields", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "url", null: false
    t.string "caption"
    t.string "imageable_type", null: false
    t.bigint "imageable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "thumb_url"
    t.index ["imageable_type", "imageable_id"], name: "index_images_on_imageable_type_and_imageable_id"
  end

  create_table "nationalities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "schools", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "styles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "artists", "art_movements"
  add_foreign_key "artists", "fields"
  add_foreign_key "artists", "nationalities"
  add_foreign_key "artists", "schools"
  add_foreign_key "artworks", "artists"
  add_foreign_key "artworks", "genres"
  add_foreign_key "artworks", "styles"
end
