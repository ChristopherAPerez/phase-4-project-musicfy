class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :album_title
      t.string :artist
      t.string :genre
      t.string :album_image
      t.string :artist_image
      t.integer :album_length
      t.integer :likes

      t.timestamps
    end
  end
end
