import { colord, extend} from 'colord';
import cmykPlugin from 'colord/plugins/cmyk';
extend([cmykPlugin]);

const mixColor = ({c, m, y}) => {
  console.log('colormix', c, m, y);
  var total = c + m + y;
  return colord({
    c: c * (100 / total),
    m: m * (100 / total),
    y: y * (100 / total),
    k: 0
  }).toHex();
};

export default mixColor;