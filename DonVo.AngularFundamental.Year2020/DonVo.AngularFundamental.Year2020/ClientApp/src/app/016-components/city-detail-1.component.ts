import { Component } from '@angular/core';

@Component({
  selector: 'city-detail-1',
  template: `
	<h2>City details</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: [city name]</li>
			<li class="list-group-item">Province: [city stateOrProvince]</li>
			<li class="list-group-item">Highlights: [city highlights]</li>
		</ul>
	`
})

export class CityDetail1Component {

}
