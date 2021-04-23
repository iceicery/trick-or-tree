///type
import palmately_compound from '../images/type-palmately-compound-leaf.PNG';
import pinnately_compound from '../images/type-pinnately-compound-leaf.PNG';
import simple from '../images/type-simple.PNG';
import twice_pinnately_compound from '../images/type-twice-pinnately-compound-leaf.PNG';
////edge
import smooth from '../images/edge-smooth.PNG';
import edge_coursely_serrate from '../images/edge-coursely-serrate.PNG';
import edge_double_serrate from '../images/edge-double-serrate.PNG';
import tipped from '../images/edge-tipped.PNG';
import tooth from '../images/edge-tooth.PNG';
import unlobed from '../images/edge-unlobed.PNG';
/////arrange
import alternate from '../images/arangement-alternate.PNG';
import opposite from '../images/arangement-opposite.PNG';
/////shape
import bell from '../images/shape-bell.PNG';
import cross from '../images/shape-cross.PNG';
import heart from '../images/shape-heart.PNG';
import linear from '../images/shape-linear.PNG';
import mitten from '../images/shape-mitten.PNG';
import needle from '../images/shape-needle-like.PNG';
import oblong from '../images/shape-oblong.PNG';
import oval from '../images/shape-oval.PNG';
import scale from '../images/shape-scale.PNG';
import spatula from '../images/shape-spatula.PNG';
import star from '../images/shape-star.PNG';
import triangle from '../images/shape-triangle.PNG';
import tulip from '../images/shape-tulip.PNG';

export const leafShape = {
  title: 'Leaf Shape',
  choices: [
    { image: bell, description: 'Bell' },
    { image: cross, description: 'Cross' },
    { image: heart, description: 'Heart' },
    { image: linear, description: 'Linear' },
    { image: mitten, description: 'Mitten' },
    { image: needle, description: 'Needle' },
    { image: oblong, description: 'Oblong' },
    { image: oval, description: 'Oval' },
    { image: scale, description: 'Scale' },
    { image: spatula, description: 'Spatula' },
    { image: star, description: 'Star' },
    { image: triangle, description: 'Triangle' },
    { image: tulip, description: 'Tulip' },
  ],
};

export const leafArrange = {
  title: 'Leaf Arrange',
  choices: [
    { image: alternate, description: 'Alternate' },
    { image: opposite, description: 'Opposite' },
  ],
};

export const leafType = {
  title: 'Leaf Type',
  choices: [
    {
      image: palmately_compound,
      description: 'Palmately Compound',
    },
    {
      image: pinnately_compound,
      description: 'Pinnately Compound',
    },
    {
      image: simple,
      description: 'Simple',
    },
    {
      image: twice_pinnately_compound,
      description: 'Twice Pinnately Compound',
    },
  ],
};

export const leafEdge = {
  title: 'Leaf Edge',
  choices: [
    {
      image: smooth,
      description: 'Smooth',
    },
    {
      image: edge_coursely_serrate,
      description: 'Edge Coursely Serrate',
    },
    {
      image: edge_double_serrate,
      description: 'Edge Double Serrate',
    },
    {
      image: tipped,
      description: 'Tipped',
    },
    {
      image: tooth,
      description: 'Tooth',
    },
    {
      image: unlobed,
      description: 'Unlobed',
    },
  ],
};
