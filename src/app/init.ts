export class Init {

load() {
    const getItem = localStorage.getItem('markers');

    if (getItem === null || getItem === undefined) {

        let  markers = [
            {
              name: 'Bor Dev',
              lat: 43.666664,
              lng: 19.6999972,
              draggable: true
            }
          ];

        localStorage.setItem('markers', JSON.stringify(markers));

    } else {
            console.log('Loading markers..');
        }

}

}
