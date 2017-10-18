import AircraftTab from '../AircraftTab/AircraftTab.js';
import FacilitiesTab from '../FacilitiesTab/FacilitiesTab.js';
import FleetTab from '../FleetTab/FleetTab.js';
import ObstaclesTab from '../ObstaclesTab/ObstaclesTab.js';
import OptionsTab from '../OptionsTab/OptionsTab.js';
import ReportsTab from '../ReportsTab/ReportsTab.js';
import UtilitiesTab from '../UtilitiesTab/UtilitiesTab.js';

export default {
  Aircraft: {
    component: AircraftTab,
    alignment: "left",
    sequence: 2,
  },
  Facilities: {
    component: FacilitiesTab,
    alignment: "left",
    sequence: 0,
  },
  Obstacles: {
    component: ObstaclesTab,
    alignment: "left",
    sequence: 3,
  },
  Fleet: {
    component: FleetTab,
    alignment: "left",
    sequence: 1,
  },
  Options: {
    component: OptionsTab,
    alignment: "right",
    sequence: 0,
  },
  Reports: {
    component: ReportsTab,
    alignment: "right",
    sequence: 1,
  },
  Utilities: {
    component: UtilitiesTab,
    alignment: "left",
    sequence: 4,
  },
};
