# health-ui-lib

Reusable Angular 19 component library for Health Dashboard/Overview built with PrimeNG and Tailwind CSS, following the Ocean Professional style.

## Installation

- Ensure your Angular app has Tailwind configured and includes the Ocean tokens (CSS variables).
- Install peer deps:
  - primeng
  - primeicons
  - chart.js

## Usage

1) Import the module:

```ts
import { HealthUiModule } from 'health-ui-lib';

@NgModule({
  imports: [HealthUiModule]
})
export class AppModule {}
```

2) Example components:

```html
<health-header-toolbar>
  <div left>...</div>
  <div center>...</div>
  <div right>...</div>
</health-header-toolbar>

<health-filter-bar
  [environmentOptions]="[{label:'Production', value:'prod'}]"
  [(selectedEnvironment)]="selectedEnv"
  [tagsOptions]="[{label:'ICU', value:'icu'}]"
  [(selectedTags)]="selectedTags"
  [(dateRange)]="dateRange">
</health-filter-bar>

<health-kpi-stat-card
  [iconUrl]="iconPath"
  label="Total Devices"
  [value]="368"
  delta="+12"
  accentColor="var(--accent-green)">
</health-kpi-stat-card>

<health-status-chip label="Warning" variant="warning"></health-status-chip>

<health-distribution-chips-row [chips]="chips"></health-distribution-chips-row>

<health-kpi-matrix [tiles]="tiles"></health-kpi-matrix>

<health-condition-timeline-chart
  [labels]="labels"
  [series]="series"
  [showLegend]="true">
</health-condition-timeline-chart>

<health-devices-table [columns]="cols" [data]="rows" [paginator]="true" [rows]="25"></health-devices-table>

<health-pagination-bar [(first)]="first" [(rows)]="rows" [totalRecords]="totalRecords"></health-pagination-bar>
```

3) Icons/Images

Components accept `iconUrl` inputs so consumers can provide icons from `assets/figmaimages/`.

## Theming

Relies on CSS variables defined in the app's global styles. Tailwind utilities are used for layout and spacing. PrimeNG theming is aligned with Tailwind.

