// to find locale data in react-intl, go to:
// https://unpkg.com/react-intl/locale-data/

import en from 'react-intl/locale-data/en';
import af from 'react-intl/locale-data/af';
import am from 'react-intl/locale-data/am';
import ar from 'react-intl/locale-data/ar';
import az from 'react-intl/locale-data/az'; // also parent for Abkahz
import be from 'react-intl/locale-data/be';
import bg from 'react-intl/locale-data/bg';
import ca from 'react-intl/locale-data/ca';
import ckb from 'react-intl/locale-data/ckb';
import cs from 'react-intl/locale-data/cs';
import cy from 'react-intl/locale-data/cy';
import da from 'react-intl/locale-data/da';
import de from 'react-intl/locale-data/de';
import el from 'react-intl/locale-data/el';
import es from 'react-intl/locale-data/es';
import et from 'react-intl/locale-data/et';
import eu from 'react-intl/locale-data/eu';
import fa from 'react-intl/locale-data/fa';
import fi from 'react-intl/locale-data/fi';
import fr from 'react-intl/locale-data/fr';
import ga from 'react-intl/locale-data/ga';
import gd from 'react-intl/locale-data/gd';
import gl from 'react-intl/locale-data/gl';
import he from 'react-intl/locale-data/he';
import hu from 'react-intl/locale-data/hu';
import hr from 'react-intl/locale-data/hr';
import hy from 'react-intl/locale-data/hy';
import id from 'react-intl/locale-data/id';
import is from 'react-intl/locale-data/is';
import it from 'react-intl/locale-data/it';
import ja from 'react-intl/locale-data/ja';
import ka from 'react-intl/locale-data/ka';
import kk from 'react-intl/locale-data/kk';
import ko from 'react-intl/locale-data/ko';
import km from 'react-intl/locale-data/km';
import ku from 'react-intl/locale-data/ku';
import lt from 'react-intl/locale-data/lt';
import lv from 'react-intl/locale-data/lv';
import mi from 'react-intl/locale-data/mi';
import mn from 'react-intl/locale-data/mn';
import nl from 'react-intl/locale-data/nl';
import nb from 'react-intl/locale-data/nb';
import nn from 'react-intl/locale-data/nn';
import nso from 'react-intl/locale-data/nso';
import or from 'react-intl/locale-data/or';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import qu from 'react-intl/locale-data/qu';
import ro from 'react-intl/locale-data/ro';
import ru from 'react-intl/locale-data/ru';
import sl from 'react-intl/locale-data/sl';
import sk from 'react-intl/locale-data/sk';
import sr from 'react-intl/locale-data/sr';
import sv from 'react-intl/locale-data/sv';
import sw from 'react-intl/locale-data/sw';
import th from 'react-intl/locale-data/th';
import tr from 'react-intl/locale-data/tr';
import tn from 'react-intl/locale-data/tn';
import uk from 'react-intl/locale-data/uk';
import uz from 'react-intl/locale-data/uz';
import vi from 'react-intl/locale-data/vi';
import xh from 'react-intl/locale-data/xh';
import zh from 'react-intl/locale-data/zh';
import zu from 'react-intl/locale-data/zu';

import locales, {customLocales, localeMap, isRtl} from './supported-locales.js';

let localeData = [].concat(
    en,
    af,
    am,
    ar,
    az, // parent for Abkahz
    be,
    bg,
    ca,
    ckb,
    cs,
    cy,
    da,
    de,
    el,
    es,
    et,
    eu,
    fa,
    fi,
    fr,
    ga,
    gd,
    gl,
    he,
    hu,
    hr,
    hy,
    id,
    is,
    it,
    ja,
    ka,
    kk,
    ko,
    km,
    ku,
    lt,
    lv,
    mi,
    mn,
    nl,
    nb,
    nn,
    nso,
    or,
    pl,
    pt,
    sl,
    sk,
    sr,
    sv,
    sw,
    qu,
    ro,
    ru,
    th,
    tn,
    tr,
    uk,
    uz,
    vi,
    xh,
    zh,
    zu
);

for (const lang in customLocales) {
    localeData.push(customLocales[lang]);
}

export {
    locales as default,
    localeMap,
    isRtl,
    localeData // data expected for initializing ReactIntl.addLocaleData
};
