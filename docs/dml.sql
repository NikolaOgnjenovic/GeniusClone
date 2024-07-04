DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename 
              FROM pg_tables 
              WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' RESTART IDENTITY CASCADE';
    END LOOP;
END $$;

INSERT INTO users (id, email, password) VALUES 
('550e8400-e29b-41d4-a716-446655440000', 'user@user.com', 'user'),
('550e8400-e29b-41d4-a716-446655440001', 'admin@admin.com', 'admin'),
('550e8400-e29b-41d4-a716-446655440002', 'moderator@moderator.com', 'moderator');

INSERT INTO user_roles (user_id, roles) VALUES 
('550e8400-e29b-41d4-a716-446655440000', 'USER'),
('550e8400-e29b-41d4-a716-446655440001', 'ADMIN'),
('550e8400-e29b-41d4-a716-446655440002', 'MODERATOR');

INSERT INTO genres (id, name) VALUES 
('550e8400-e29b-41d4-a716-446655440001', 'Rock'),
('550e8400-e29b-41d4-a716-446655440002', 'Pop'),
('550e8400-e29b-41d4-a716-446655440003', 'Jazz'),
('550e8400-e29b-41d4-a716-446655440004', 'Classical'),
('550e8400-e29b-41d4-a716-446655440005', 'Hip Hop');

INSERT INTO performer (id) VALUES
	('f47ac10b-58cc-4372-a567-0e02b2c3d479'),
	('f47ac10b-58cc-4372-a567-0e02b2c3d480'),
	('f47ac10b-58cc-4372-a567-0e02b2c3d481');

INSERT INTO artist (id, name, surname, description, birthday, image) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'John', 'Doe', 'An influential rock musician.', '1980-04-15', 'https://i.imgur.com/xcV1qbk.jpeg'),
('f47ac10b-58cc-4372-a567-0e02b2c3d480', 'Jane', 'Smith', 'A renowned jazz singer.', '1985-08-22', 'https://i.imgur.com/MgP7eM4.jpeg'),
('f47ac10b-58cc-4372-a567-0e02b2c3d481', 'Michael', 'Johnson', 'A popular pop artist.', '1990-12-05', 'https://i.imgur.com/hKP47Op.jpeg');

INSERT INTO performer (id) VALUES
	('f47ac10b-58cc-4372-a567-0e02b2c3d482');
	
INSERT INTO band (id, name, image) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d482', 'The Rock Band', 'https://i.imgur.com/hKP47Op.jpeg');

INSERT INTO band_artist (band_id, artist_id) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d482', 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
('f47ac10b-58cc-4372-a567-0e02b2c3d482', 'f47ac10b-58cc-4372-a567-0e02b2c3d481');

INSERT INTO album (id, cover_art, release_date, title, performer_id) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d484', 'https://i.imgur.com/f7Yd9RX.jpeg', '2023-02-11', 'Rave Hits', 'f47ac10b-58cc-4372-a567-0e02b2c3d480'),
('f47ac10b-58cc-4372-a567-0e02b2c3d483', 'https://i.imgur.com/cPeaacF.jpeg', '2024-07-15', 'Best Hits', 'f47ac10b-58cc-4372-a567-0e02b2c3d482');

INSERT INTO album_genre (album_id, genre_id) VALUES
	('f47ac10b-58cc-4372-a567-0e02b2c3d483', '550e8400-e29b-41d4-a716-446655440001'),
	('f47ac10b-58cc-4372-a567-0e02b2c3d484', '550e8400-e29b-41d4-a716-446655440005');

INSERT INTO songs (id, is_pending_review, link, title, album_id, image) VALUES 
('f47ac10a-58cc-4372-a567-0e02b2c3d484', true, 'https://www.youtube.com/', 'Song 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'https://i.imgur.com/8h2ZnG4.jpg'),
('f47ac10a-58cc-4372-a567-0e02b2c3d485', true, 'https://www.youtube.com/', 'Song 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'https://i.imgur.com/ZZ6khuM.jpg'),
('f47ac10a-58cc-4372-a567-0e02b2c3d486', true, 'https://www.youtube.com/', 'Song 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'https://i.imgur.com/OcVeqD5.jpg'),
('f47ac10a-58cc-4372-a567-0e02b2c3d487', true, 'https://www.youtube.com/', 'Song 4', 'f47ac10b-58cc-4372-a567-0e02b2c3d484', 'https://i.imgur.com/ldsoit5.png'),
('f47ac10a-58cc-4372-a567-0e02b2c3d488', true, 'https://www.youtube.com/', 'Song 5', 'f47ac10b-58cc-4372-a567-0e02b2c3d484', 'https://i.imgur.com/qPR0oLK.jpeg'),
('f47ac10a-58cc-4372-a567-0e02b2c3d489', true, 'https://www.youtube.com/', 'Song 6', 'f47ac10b-58cc-4372-a567-0e02b2c3d484', 'https://i.imgur.com/f5Oxxld.jpeg');

INSERT INTO playlist (id, name, user_id, image) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d490', 'My Favorites', '550e8400-e29b-41d4-a716-446655440000', 'https://i.imgur.com/f5Oxxld.jpeg'),
('f47ac10b-58cc-4372-a567-0e02b2c3d491', 'Party Mix', '550e8400-e29b-41d4-a716-446655440000', 'https://i.imgur.com/WxkwGby.jpeg');

INSERT INTO playlist_song (playlist_id, song_id) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10a-58cc-4372-a567-0e02b2c3d484'),
('f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10a-58cc-4372-a567-0e02b2c3d485'),
('f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10a-58cc-4372-a567-0e02b2c3d486'),
('f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10a-58cc-4372-a567-0e02b2c3d487'),
('f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10a-58cc-4372-a567-0e02b2c3d488'),
('f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10a-58cc-4372-a567-0e02b2c3d489');

INSERT INTO ads (id, image, link, genre_id) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d492', 'https://i.imgur.com/bwhwVJW.jpeg', 'https://example.com/ad1', '550e8400-e29b-41d4-a716-446655440001'),
('f47ac10b-58cc-4372-a567-0e02b2c3d493', 'https://i.imgur.com/8xxl6Yp.jpeg', 'https://example.com/ad2', '550e8400-e29b-41d4-a716-446655440002'),
('f47ac10b-58cc-4372-a567-0e02b2c3d494', 'https://i.imgur.com/YPS7Ods.jpeg', 'https://example.com/ad3', '550e8400-e29b-41d4-a716-446655440003'),
('f47ac10b-58cc-4372-a567-0e02b2c3d495', 'https://i.imgur.com/IzCy6ig.jpeg', 'https://example.com/ad4', '550e8400-e29b-41d4-a716-446655440004'),
('f47ac10b-58cc-4372-a567-0e02b2c3d496', 'https://i.imgur.com/y854MpV.jpeg', 'https://example.com/ad5', '550e8400-e29b-41d4-a716-446655440005');

INSERT INTO reviews (id, description, value, song_id, user_id) VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d497', 'Great song!', 5, 'f47ac10a-58cc-4372-a567-0e02b2c3d484', '550e8400-e29b-41d4-a716-446655440000'),
('f47ac10b-58cc-4372-a567-0e02b2c3d49f', 'Needs more instruments.', 3, 'f47ac10a-58cc-4372-a567-0e02b2c3d486', '550e8400-e29b-41d4-a716-446655440000'),
('f47ac10b-58cc-4372-a567-0e02b2c3d49a', 'Awesome lyrics!', 5, 'f47ac10a-58cc-4372-a567-0e02b2c3d485', '550e8400-e29b-41d4-a716-446655440000');


-- Spare images to use:
-- https://i.imgur.com/MSWsFZE.jpeg
-- https://i.imgur.com/wV3VRLt.png
-- https://i.imgur.com/YKoRCbh.jpeg
-- https://i.imgur.com/5J9l8Rt.jpeg
-- https://i.imgur.com/TclgNRR.jpeg