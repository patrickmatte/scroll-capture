export const fontFamilies = [];
export const fontStyles = {};

// export function getFonts() {
//   const promise = new Promise((resolve, reject) => {
//     function resolvePromise() {
//       resolve({ families: fontFamilies, styles: fontStyles });
//     }
//     if (fontFamilies.length > 0) {
//       resolvePromise();
//     } else {
//       detectFonts();
//       resolvePromise();

//       //   const permissionPromise = navigator.permissions.query({ name: 'local-fonts' });
//       //   permissionPromise.then((response) => {
//       //     console.log('response', response);
//       //     if (response.state == 'granted')
//       //       try {
//       //         const fontPromise = window.queryLocalFonts();
//       //         fontPromise.then((availableFonts) => {
//       //           availableFonts.forEach((fontData) => {
//       //             addStyle(fontData);
//       //           });
//       //           resolvePromise();
//       //         });
//       //       } catch (err) {
//       //         console.error(err.name, err.message);
//       //       }
//       //   });
//     }
//   });
//   return promise;
//     if (fontFamilies.length > 0) {

//     }
// }

export function addStyle(fontData) {
  const family = fontData.family;
  if (fontFamilies.indexOf(family) == -1) {
    fontFamilies.push(family);
    fontStyles[fontData.family] = [];
  }
  let styles = fontStyles[fontData.family];
  if (styles.indexOf(fontData.style) == -1) styles.push(fontData.style);
}

export function getFonts() {
  if (fontFamilies.length > 0) {
    return { families: fontFamilies, styles: fontStyles };
  }
  const fontCheck = [
    // Windows 10
    'Arial',
    'Arial Black',
    'Bahnschrift',
    'Calibri',
    'Cambria',
    'Cambria Math',
    'Candara',
    'Comic Sans MS',
    'Consolas',
    'Constantia',
    'Corbel',
    'Courier New',
    'Ebrima',
    'Franklin Gothic Medium',
    'Gabriola',
    'Gadugi',
    'Georgia',
    'HoloLens MDL2 Assets',
    'Impact',
    'Ink Free',
    'Javanese Text',
    'Leelawadee UI',
    'Lucida Console',
    'Lucida Sans Unicode',
    'Malgun Gothic',
    'Marlett',
    'Microsoft Himalaya',
    'Microsoft JhengHei',
    'Microsoft New Tai Lue',
    'Microsoft PhagsPa',
    'Microsoft Sans Serif',
    'Microsoft Tai Le',
    'Microsoft YaHei',
    'Microsoft Yi Baiti',
    'MingLiU-ExtB',
    'Mongolian Baiti',
    'MS Gothic',
    'MV Boli',
    'Myanmar Text',
    'Nirmala UI',
    'Palatino Linotype',
    'Segoe MDL2 Assets',
    'Segoe Print',
    'Segoe Script',
    'Segoe UI',
    'Segoe UI Historic',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'SimSun',
    'Sitka',
    'Sylfaen',
    'Symbol',
    'Tahoma',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Webdings',
    'Wingdings',
    'Yu Gothic',
    // macOS
    'American Typewriter',
    'Andale Mono',
    'Arial',
    'Arial Black',
    'Arial Narrow',
    'Arial Rounded MT Bold',
    'Arial Unicode MS',
    'Avenir',
    'Avenir Next',
    'Avenir Next Condensed',
    'Baskerville',
    'Big Caslon',
    'Bodoni 72',
    'Bodoni 72 Oldstyle',
    'Bodoni 72 Smallcaps',
    'Bradley Hand',
    'Brush Script MT',
    'Chalkboard',
    'Chalkboard SE',
    'Chalkduster',
    'Charter',
    'Cochin',
    'Comic Sans MS',
    'Copperplate',
    'Courier',
    'Courier New',
    'Didot',
    'DIN Alternate',
    'DIN Condensed',
    'Futura',
    'Geneva',
    'Georgia',
    'Gill Sans',
    'Helvetica',
    'Helvetica Neue',
    'Herculanum',
    'Hoefler Text',
    'Impact',
    'Lucida Grande',
    'Luminari',
    'Marker Felt',
    'Menlo',
    'Microsoft Sans Serif',
    'Monaco',
    'Noteworthy',
    'Optima',
    'Palatino',
    'Papyrus',
    'Phosphate',
    'Rockwell',
    'Savoye LET',
    'SignPainter',
    'Skia',
    'Snell Roundhand',
    'Tahoma',
    'Times',
    'Times New Roman',
    'Trattatello',
    'Trebuchet MS',
    'Verdana',
    'Zapfino',
  ];

  const styles = [
    'Plain',
    'Bold',
    'Regular',
    'Condensed',
    'Condensed Bold',
    'Condensed Light',
    'Light',
    'Semibold',
    'Chancery',
    'ExtraBold',
    'Heavy',
    'Medium',
    'SemiBold',
    'Thin',
    'UltraLight',
    'Bold Italic',
    'Italic',
    'Black',
    'Black Oblique',
    'Book',
    'Book Oblique',
    'Heavy Oblique',
    'Light Oblique',
    'Medium Oblique',
    'Oblique',
    'Roman',
    'Demi Bold',
    'Demi Bold Italic',
    'Heavy Italic',
    'Medium Italic',
    'Ultra Light',
    'Ultra Light Italic',
    'SemiBold Italic',
    'Book Italic',
    'Black Italic',
    'Semi Bold',
    'Condensed ExtraBold',
    'Condensed Medium',
    'Bold Oblique',
    'Light Italic',
    'UltraBold',
    'Condensed Black',
    'Thin Italic',
    'UltraLight Italic',
    'Ornaments',
    'Demi',
    'Wide',
    'BoldOblique',
    'ExtraLight',
    'Bold Inclined',
    'Inclined',
    'ExtraBlack',
    'Inline',
    'Solid',
    'Ultralight',
    'HouseScript',
    'HouseScript Semibold',
    'Black Condensed',
    'Black Extended',
    'Extended',
    'Light Condensed',
    'Light Extended',
    'Text',
  ];

  const fontAvailables = [];
  const detector = new Detector();
  fontCheck.forEach((family) => {
    // styles.forEach((style) => {
    // const font = `${family}`;
    const detected = detector.detect(family);
    console.log('detected=', detected, 'family=', family);
    if (detected) {
      // addStyle({ family });
      fontAvailables.push(family);
    }
    // if (document.fonts.check(`12px "${family}"`)) {
    //   fontAvailables.add(font);
    // }
    // });
  });
  console.log('fontAvailables', fontAvailables);
  return { families: fontAvailables };
}

var Detector = function () {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  var baseFonts = ['monospace', 'sans-serif', 'serif'];

  //we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  var testString = 'mmmmmmmmmmlli';

  //we test using 72px font size, we may use any size. I guess larger the better.
  var testSize = '72px';

  var h = document.getElementsByTagName('body')[0];

  // create a SPAN in the document to get the width of the text we use to test
  var s = document.createElement('span');
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  var defaultWidth = {};
  var defaultHeight = {};
  for (var index in baseFonts) {
    //get the default width for the three base fonts
    s.style.fontFamily = baseFonts[index];
    h.appendChild(s);
    defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
    defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
    h.removeChild(s);
  }

  function detect(font) {
    var detected = false;
    for (var index in baseFonts) {
      s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
      h.appendChild(s);
      var matched = s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]];
      h.removeChild(s);
      detected = detected || matched;
    }
    return detected;
  }

  this.detect = detect;
};
