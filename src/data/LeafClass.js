import palmately_compound from '../images/type-palmately-compound-leaf.PNG';
import pinnately_compound from '../images/type-pinnately-compound-leaf.PNG';
import simple from '../images/type-simple.PNG';
import twice_pinnately_compound from '../images/type-twice-pinnately-compound-leaf.PNG';

import smooth from '../images/edge-smooth.PNG';
import edge_coursely_serrate from '../images/edge-coursely-serrate.PNG';
import edge_double_serrate from '../images/edge-double-serrate.PNG';
import tipped from '../images/edge-tipped.PNG';
import tooth from '../images/edge-tooth.PNG';
import unlobed from '../images/edge-unlobed.PNG';

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
