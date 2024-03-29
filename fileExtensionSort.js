let files = [
  "pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

// ## Info

// ### Image File Extensions

// * jpg
// * gif
// * jpeg
// * png

// ### Video File Extensions

// * mov
// * avi
// * mpeg
// * mp4
// * mpg

function FileExtensionSort(fileArr) {
  // create two arrays we will be sorting files into
  videoArr = [];
  imageArr = [];
  // create two arrays with known extensions
  imageExtensions = ["jpg", "gid", "jpeg", "png"];
  videoExtensions = ["mov", "avi", "mpeg", "mp4", "mpg"];
  // loop over the files array, keeping track of each file
  fileArr.forEach(function(file) {
    // loop over image extensions array, keeping track of extensions
    imageExtensions.forEach(function(ext) {
      // check if the file that we are keeping track of ends with extension we are keeping track of
      if (file.endsWith(ext)) {
        // if so, push it to the image array
        imageArr.push(file);
        // return from the image extensions loop
        return;
      }
    });
    // loop over video extensions array, keeping track of extensions
    videoExtensions.forEach(function(ext) {
      // check if the file that we are keeping track of ends with extension we are keeping track of
      if (file.endsWith(ext)) {
        // if so, push it to the video array
        videoArr.push(file);
        // return from the video extensions loop
        return;
      }
    });
  });
  // return object with both arrays
  return {
    videoArr,
    imageArr
  };
}
console.log(FileExtensionSort(files));
