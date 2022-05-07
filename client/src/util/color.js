import { colord, extend} from 'colord';
import cmykPlugin from 'colord/plugins/cmyk';
extend([cmykPlugin]);

const mixColor = ({c, m, y}) => {
  var total = c + m + y;
  return colord({
    c: c * (100 / total),
    m: m * (100 / total),
    y: y * (100 / total),
    k: 0
  }).toHex();
};

const randomMix = (qty) => {
  let color1 = Math.floor(Math.random() * qty);
  let color2 = Math.floor(Math.random() * (qty - color1));
  let color3 = qty - color1 - color2;

  let shuffled = [color1, color2, color3];
  shuffled.sort((a, b) => {
    if (Math.random() < .5) {
      return -1;
    } else {
      return 1;
    }
  });

  return {
    c: shuffled[0],
    m: shuffled[1],
    y: shuffled[2]
  };
};

const colorScore = (target, result) => {
  console.log(target, result);
  var total = target.c + target.m + target.y;
  var cyanDiff = Math.abs(target.c - result.c);
  var magentaDiff = Math.abs(target.m - result.m);
  var yellowDiff = Math.abs(target.y - result.y);

  var score = total - cyanDiff - magentaDiff - yellowDiff;
  return (score + total) / 2;
}

export { mixColor, randomMix, colorScore };