export const plantPhotos = [
  { id: 'snake-plant', name: 'Snake Plant', scientificName: 'Sansevieria trifasciata', file: 'snake-plant.jpg' },
  { id: 'peace-lily', name: 'Peace Lily', scientificName: 'Spathiphyllum wallisii', file: 'peace-lily.jpg' },
  { id: 'spider-plant', name: 'Spider Plant', scientificName: 'Chlorophytum comosum', file: 'spider-plant.jpg' },
  { id: 'pothos', name: 'Pothos', scientificName: 'Epipremnum aureum', file: 'pothos.jpg' },
  { id: 'rubber-plant', name: 'Rubber Plant', scientificName: 'Ficus elastica', file: 'rubber-plant.jpg', source: 'https://commons.wikimedia.org/wiki/File:Gummibaum_(Ficus_elastica_Robusta).jpg', license: 'CC BY 2.0', author: 'Maja Dumat' },
  { id: 'zz-plant', name: 'ZZ Plant', scientificName: 'Zamioculcas zamiifolia', file: 'zz-plant.jpg' },
  { id: 'monstera', name: 'Monstera', scientificName: 'Monstera deliciosa', file: 'monstera.jpg' },
  { id: 'jade-plant', name: 'Jade Plant', scientificName: 'Crassula ovata', file: 'jade-plant.jpg', source: 'https://commons.wikimedia.org/wiki/File:Crassula_ovata_Plant.jpg', license: 'CC BY 4.0', author: 'Atlas Þə Biologist' },
  { id: 'aloe-vera', name: 'Aloe Vera', scientificName: 'Aloe vera', file: 'aloe-vera.jpg', source: 'https://commons.wikimedia.org/wiki/File:Aloe_Vera_plant_in_a_flowerpot.jpg', license: 'CC BY-SA 4.0', author: 'Sabina Bajracharya' },
  { id: 'boston-fern', name: 'Boston Fern', scientificName: 'Nephrolepis exaltata', file: 'boston-fern.jpg', source: 'https://commons.wikimedia.org/wiki/File:Nephrolepis_exaltata_indoor0705c.jpg', license: 'CC BY-SA 3.0', author: 'Wikimedia Commons contributor (see source page)' },
  { id: 'philodendron', name: 'Philodendron', scientificName: 'Philodendron hederaceum', file: 'philodendron.jpg' },
  { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', scientificName: 'Ficus lyrata', file: 'fiddle-leaf-fig.jpg', source: 'https://commons.wikimedia.org/wiki/File:Ficus_lyrata_98162192.jpg', license: 'CC BY-SA 4.0', author: 'Diogo Luiz' },
  { id: 'areca-palm', name: 'Areca Palm', scientificName: 'Dypsis lutescens', file: 'areca-palm.jpg', source: 'https://commons.wikimedia.org/wiki/File:Dypsis_lutescens1.jpg', license: 'CC BY-SA 3.0', author: 'KENPEI' },
  { id: 'tulsi', name: 'Tulsi (Holy Basil)', scientificName: 'Ocimum tenuiflorum', file: 'tulsi.jpg', source: 'https://commons.wikimedia.org/wiki/File:Thulasi2.jpg', license: 'CC BY-SA 2.5', author: 'Challiyan at Malayalam Wikipedia' },
  { id: 'jasmine', name: 'Jasmine', scientificName: 'Jasminum sambac', file: 'jasmine.jpg', source: 'https://commons.wikimedia.org/wiki/File:Jasminum_sambac_Flower.jpg', license: 'CC BY-SA 4.0', author: 'PapiPijuan' },
  { id: 'bird-of-paradise', name: 'Bird of Paradise', scientificName: 'Strelitzia reginae', file: 'bird-of-paradise.jpg', source: 'https://commons.wikimedia.org/wiki/File:Strelitzia_larger.jpg', license: 'Public domain', author: 'Scott Bauer, USDA' },
  { id: 'bonsai', name: 'Bonsai', scientificName: 'Ficus microcarpa', file: 'bonsai.jpg', source: 'https://commons.wikimedia.org/wiki/File:Ficus_microcarpa_bonsai_Kiev.jpg', license: 'CC BY-SA 3.0', author: 'Аимаина хикари' },
  { id: 'default-plant', name: 'Plant', scientificName: '', file: 'default-plant.jpg' },
];

export const plantPhoto = (id) => {
  const p = plantPhotos.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown plant photo id: ${id}`);
  return `/assets/images/plants/${p.file}`;
};
