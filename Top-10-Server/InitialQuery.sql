CREATE DATABASE good_weekend_quiz;

CREATE TABLE `top_10_lists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `item_1` VARCHAR(255) DEFAULT NULL,
  `item_2` VARCHAR(255) DEFAULT NULL,
  `item_3` VARCHAR(255) DEFAULT NULL,
  `item_4` VARCHAR(255) DEFAULT NULL,
  `item_5` VARCHAR(255) DEFAULT NULL,
  `item_6` VARCHAR(255) DEFAULT NULL,
  `item_7` VARCHAR(255) DEFAULT NULL,
  `item_8` VARCHAR(255) DEFAULT NULL,
  `item_9` VARCHAR(255) DEFAULT NULL,
  `item_10` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `top_10_lists` (`id`, `category`, `title`, `item_1`, `item_2`, `item_3`, `item_4`, `item_5`, `item_6`, `item_7`, `item_8`, `item_9`, `item_10`)
VALUES
(1, 'Entertainment', 'Most followed celebrities on Instagram', 'Cristiano Ronaldo', 'Lionel Messi', 'Selena Gomez', 'Kylie Jenner', 'Dwayne Johnson', 'Ariana Grande', 'Kim Kardashian', 'Beyonce', 'Khloe Kardashian', 'Justin Bieber'),
(2, 'Geography', 'Countries by land mass', 'Russia', 'Canada', 'United States, Usa, America, United States Of America, Us', 'China', 'Brazil', 'Australia', 'India', 'Argentina', 'Kazakhstan', 'Algeria'),
(3, 'Geography', 'Most populated countries', 'China', 'India', 'United States, Usa, America, United States Of America, Us', 'Indonesia', 'Pakistan', 'Nigeria', 'Brazil', 'Bangladesh', 'Russia', 'Mexico'),
(4, 'Entertainment', 'Highest grossing films of all time', 'Avatar', 'Avengers: Endgame, Avengers Endgame, Endgame, End Game', 'Titanic', 'Star Wars: The Force Awakens, The Force Awakens, Star Wars The Force Awakens', 'Avengers: Infinity War, Infinity War, Avengers Infinity War', 'Spiderman: No Way Home, No Way Home, Spiderman No Way Home', 'Jurassic World', 'The Lion King', 'The Avengers', 'Furious 7'),
(5, 'Entertainment', 'Best-selling musical artists of all time', 'The Beatles', 'Elvis Presley', 'Michael Jackson', 'Madonna', 'Elton John', 'Led Zeppelin', 'Rihanna', 'Pink Floyd', 'Eminem', 'Mariah Carey'),
(6, 'Sports', 'Most successful football clubs by trophies', 'Real Madrid', 'Barcelona', 'Manchester United, Man United', 'Bayern Munich', 'Liverpool', 'Juventus', 'Ac Milan', 'Paris Saint Germain, Psg', 'Ajax', 'Chelsea'),
(7, 'Entertainment', 'Best-selling video game franchises', 'Mario', 'Tetris', 'Pokemon', 'Call Of Duty', 'Grand Theft Auto, Gta', 'Fifa', 'Minecraft', 'The Sims', 'Zelda', 'Resident Evil'),
(8, 'Geography', 'Largest cities by population (2024)', 'Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City', 'Dhaka', 'Cairo', 'Mumbai', 'Beijing', 'Osaka'),
(9, 'Entertainment', 'Highest-grossing animated films of all time', 'The Lion King', 'Incredibles Two, Incredibles 2', 'Frozen Two, Frozen 2', 'Frozen', 'Minions', 'Toy Story Four, Toy Story 4', 'Toy Story Three, Toy Story 3', 'Finding Dory', 'Zootopia', 'Shrek Two, Shrek 2'),
(10, 'Geography', 'Most visited countries in the world (2024)', 'France', 'Spain', 'United States, Usa, America, United States Of America, Us', 'China', 'Italy', 'United Kingdom, Uk', 'Germany', 'Mexico', 'Thailand', 'Japan'),
(11, 'Geography', 'Smallest countries by area', 'Vatican City', 'Monaco', 'Nauru', 'Tuvalu', 'San Marino', 'Liechtenstein', 'Marshall Islands', 'Saint Kitts and Nevis', 'Maldives', 'Malta'),
(12, 'Geography', 'Countries with the most active volcanos', 'Indonesia', 'Japan', 'United States, Usa, America, United States Of America, Us', 'Russia', 'Chile', 'Philippines, The Philippines', 'Ecuador', 'Italy', 'Iceland', 'Papua New Guinea'),
(13, 'Geography', 'Countries with the most UNESCO World Heritage Sites', 'Italy', 'China', 'Germany', 'France', 'Spain', 'India', 'Mexico', 'United Kingdom', 'Russia', 'Iran'),
(14, 'Geography', 'Most spoken language by population (As a native language)', 'Mandarin', 'Spanish', 'English', 'Hindi', 'Arabic', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Punjabi'),
(15, 'Geography', 'Largest oceans and seas', 'Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Arctic Ocean', 'South China Sea', 'Caribbean Sea', 'Mediterranean Sea', 'Bering Sea', 'Gulf of Mexico'),
(16, 'Sports', 'Highest-scoring NBA players of all time', 'Lebron James', 'Kareem Abdul Jabbar', 'Karl Malone', 'Kobe Bryant', 'Michael Jordan', 'Dirk Nowitzki', 'Wilt Chamberlain', 'Kevin Durant', 'Shaquille O’Neal', 'Carmelo Anthony'),
(17, 'Sports', 'Most career runs in test cricket by player', 'Sachin Tendulkar', 'Ricky Ponting', 'Jacques Kallis', 'Rahul Dravid', 'Joe Root', 'Alastair Cook', 'Kumar Sangakkara', 'Brian Lara', 'Shivnarine Chanderpaul', 'Mahela Jayawardene'),
(18, 'Sports', 'Highest earning athletes of all time (Inflation Adjusted)', 'Michael Jordan', 'Tiger Woods', 'Cristiano Ronaldo', 'Arnold Palmer', 'Lebron James', 'Jack Nicklaus', 'Lionel Messi', 'David Beckham', 'Roger Federer', 'Floyd Mayweather'),
(19, 'Sports', 'Richest Sports Leagues In The World', 'Nfl, National Football League', 'Mlb, Major League Baseball', 'Nba, National Basketball Association', 'Indian Premier League, Ipl', 'English Premier League, Epl', 'Nhl, National Hockey League', 'La Liga', 'Bundesliga', 'Serie A', 'Champions League'),
(20, 'Sports', 'Most popular Sports in the World (By number of fans)', 'Soccer', 'Cricket', 'Hockey', 'Tennis', 'Volleyball', 'Table Tennis', 'Basketball', 'Baseball', 'Rugby', 'Golf'),
(21, 'Entertainment', 'Highest-grossing film franchises of all time', 'Marvel', 'Star Wars', 'Harry Potter', 'James Bond', 'Spiderman', 'The Lord Of The Rings', 'Fast And Furious', 'Jurassic Park', 'Batman', 'Transformers'),
(22, 'Entertainment', 'Most streamed artists on spotify', 'Taylor Swift', 'Drake', 'Bad Bunny', 'The Weeknd', 'Ed Sheeran', 'Ariana Grande', 'Eminem', 'Justin Bieber', 'Kanye West', 'Post Malone'),
(23, 'Entertainment', 'Most-Watched TV Show Finales (U.S.)', 'Mash', 'Cheers', 'The Fugitive', 'Seinfeld', 'Friends', 'Frasier', 'Game of Thrones', 'Breaking Bad', 'The Sopranos', 'The Office'),
(24, 'Geography', 'Countries with the Most Islands', 'Sweden', 'Finland', 'Norway', 'Canada', 'Indonesia', 'Australia', 'Philippines', 'Japan', 'United States, Usa, America, United States Of America, Us', 'China'),
(25, 'Geography', 'Countries with the Most Lakes', 'Canada', 'Russia', 'United States, Usa, America, United States Of America, Us', 'China', 'Brazil', 'Norway', 'India', 'Kazakhstan', 'Argentina', 'Sweden'),
(26, 'Geography', 'Countries with the Most Desert Area', 'China', 'Australia', 'United States, Usa, America, United States Of America, Us', 'Russia', 'Argentina', 'Kazakhstan', 'Saudi Arabia', 'Iran', 'Mongolia', 'Algeria'),
(27, 'Geography', 'Oil Producing Countries in the world', 'United States, Usa, America, United States Of America, Us', 'Saudi Arabia', 'Russia', 'Canada', 'China', 'Iraq', 'United Arab Emirates, Uae', 'Brazil', 'Iran', 'Kuwait');