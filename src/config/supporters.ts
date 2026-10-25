import nwoLogo       from '../assets/supports/NWO logo.jpg';
import tttLogo       from '../assets/supports/logo-ttt-en.png';
import ercLogo       from '../assets/supports/ERC.png';
import tuDelftLogo   from '../assets/supports/tudelft.png';
import aihLogo       from '../assets/supports/AIH.png';
import yesDelftLogo  from '../assets/supports/yesdelft.png';

export interface Supporter {
  name: string;
  logoPath: string | null;
  url: string | null;
  altText: string;
}

export const supporters: Supporter[] = [
  {
    name: 'NWO',
    logoPath: nwoLogo,
    url: null,
    altText: 'NWO, Dutch Research Council',
  },
  {
    name: 'TTT',
    logoPath: tttLogo,
    url: null,
    altText: 'TTT GreenTech',
  },
  {
    name: 'ERC',
    logoPath: ercLogo,
    url: null,
    altText: 'European Research Council',
  },
  {
    name: 'TU Delft',
    logoPath: tuDelftLogo,
    url: null,
    altText: 'TU Delft, Delft University of Technology',
  },
  {
    name: 'Aerospace Innovation Hub',
    logoPath: aihLogo,
    url: null,
    altText: 'TU Delft Aerospace Innovation Hub',
  },
  {
    name: 'YES!Delft',
    logoPath: yesDelftLogo,
    url: null,
    altText: 'YES!Delft',
  },
];
