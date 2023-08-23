enum SearchTypeEnum {
    POP_DENSITY = 'population_density',
    DRONE_RES = 'drone_restriction',
}

const SEARCH_TYPE_DISPLAY_MAP = {
    [SearchTypeEnum.POP_DENSITY]: 'Population Density',
    [SearchTypeEnum.DRONE_RES]: 'Drone Restrictions'
};


enum RoutesEnum {
    START_PAGE = '/',
    POPULATION_DENSITY_TABLE_PAGE = '/population_density',
    DRONE_RESTRICTION_TABLE_PAGE = '/drone_restriction',
}

const MAP_SERVER_URL = 'https://api3.geo.admin.ch/rest/services/api/MapServer/identify';
const DRONE_RESTRICTIONS_LAYER = 'all:ch.bazl.einschraenkungen-drohnen';
const POPULATION_DENSITY_LAYER = 'all:ch.bfs.volkszaehlung-bevoelkerungsstatistik_einwohner';
const MAP_SERVER_GEOMETRY_TYPE = 'esriGeometryPoint';
const MAP_SERVER_SR = '4326';

export {
    SearchTypeEnum,
    RoutesEnum,
    SEARCH_TYPE_DISPLAY_MAP,
    MAP_SERVER_URL,
    DRONE_RESTRICTIONS_LAYER,
    POPULATION_DENSITY_LAYER,
    MAP_SERVER_GEOMETRY_TYPE,
    MAP_SERVER_SR,
}