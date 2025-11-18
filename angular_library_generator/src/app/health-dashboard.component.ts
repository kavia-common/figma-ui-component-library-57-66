import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

/* Import the local library module directly from the projects path */
import { HealthUiModule } from '../../projects/health-ui-lib/src/lib/health-ui.module';

/**
 * PUBLIC_INTERFACE
 * HealthDashboardComponent
 * Health Dashboard demo page that composes health-ui-lib components with Tailwind and PrimeNG styling.
 * This page is SSR-safe and uses Ocean Professional tokens defined in global styles.
 */
@Component({
  selector: 'app-health-dashboard',
  standalone: true,
  imports: [HealthUiModule, RouterLink],
  providers: [provideAnimations()],
  template: `
  <health-header-toolbar ariaLabel="Health Monitor Application Header">
    <div left class="flex items-center gap-2">
      <button class="border border-[color:var(--border-subtle)] rounded-[10px] p-1 bg-white" aria-label="Menu">
        <i class="pi pi-bars text-sm"></i>
      </button>
      <div class="font-semibold">Health Monitor</div>
    </div>
    <div center>
      <input pInputText type="search" placeholder="Search devices, incidents..." class="w-full md:w-[480px] h-8 text-sm border rounded-[10px] px-3" aria-label="Global search"/>
    </div>
    <div right class="flex items-center gap-2">
      <button class="border border-[color:var(--border-subtle)] rounded-[10px] p-1 bg-white" aria-label="Help"><i class="pi pi-question-circle text-sm"></i></button>
      <button class="border border-[color:var(--border-subtle)] rounded-[10px] p-1 bg-white" aria-label="Notifications"><i class="pi pi-bell text-sm"></i></button>
      <a routerLink="/" class="border border-[color:var(--border-subtle)] rounded-[10px] px-2 py-1 bg-white text-xs" aria-label="Dashboard Home">Dashboard</a>
    </div>
  </health-header-toolbar>

  <main class="max-w-[1160px] mx-auto p-6">
    <section class="flex items-end justify-between mb-3">
      <div>
        <h1 class="text-[20px] font-semibold">Welcome, Jane Doe!</h1>
        <p class="text-[12px] text-[color:var(--text-secondary)] font-medium">Overview</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] border border-[color:var(--border-subtle)] bg-white text-sm" aria-label="Change date range">
          <i class="pi pi-calendar text-sm"></i> Last 30 days
        </button>
        <button class="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] border border-[color:var(--border-subtle)] bg-white text-sm" aria-label="Export">
          <i class="pi pi-download text-sm"></i> Export
        </button>
        <button class="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] border border-[color:var(--border-subtle)] bg-white text-sm" aria-label="Customize">
          <i class="pi pi-cog text-sm"></i> Customize
        </button>
      </div>
    </section>

    <health-filter-bar
      [environmentOptions]="envs"
      [(selectedEnvironment)]="selectedEnv"
      [tagsOptions]="tags"
      [(selectedTags)]="selectedTags"
      [(dateRange)]="dateRange">
    </health-filter-bar>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      <health-kpi-stat-card
        [iconUrl]="''"
        label="Total Devices"
        [value]="368"
        delta="+12"
        accentColor="var(--accent-green)">
      </health-kpi-stat-card>

      <health-kpi-stat-card
        [iconUrl]="''"
        label="Incidents"
        [value]="12"
        delta="+2"
        accentColor="var(--accent-amber)">
      </health-kpi-stat-card>

      <health-kpi-stat-card
        [iconUrl]="''"
        label="Offline"
        [value]="46"
        delta="+5"
        accentColor="var(--accent-red)">
      </health-kpi-stat-card>

      <health-kpi-stat-card
        [iconUrl]="''"
        label="Alerts"
        [value]="45"
        delta="-3"
        accentColor="var(--accent-pink)">
      </health-kpi-stat-card>
    </div>

    <health-distribution-chips-row class="my-4" [chips]="distribution"></health-distribution-chips-row>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
      <health-kpi-matrix [tiles]="matrixTiles">
        <img sparkline src="" alt="" class="w-16 h-6" />
      </health-kpi-matrix>

      <health-condition-timeline-chart
        [labels]="labels"
        [series]="series"
        [showLegend]="true">
      </health-condition-timeline-chart>
    </div>

    <section aria-label="Devices table" class="my-4">
      <health-devices-table
        [columns]="columns"
        [data]="rows"
        [paginator]="true"
        [rows]="10">
      </health-devices-table>

      <health-pagination-bar
        class="mt-2"
        [(first)]="first"
        [(rows)]="pageRows"
        [totalRecords]="totalRecords">
      </health-pagination-bar>
    </section>
  </main>
  `
})
export class HealthDashboardComponent {
  // Filter sample data
  envs = [{label:'Production', value:'prod'}, {label:'Staging', value:'stg'}, {label:'Development', value:'dev'}];
  selectedEnv = 'prod';
  tags = [{label:'ICU', value:'icu'}, {label:'Radiology', value:'rad'}, {label:'Cardiology', value:'card'}];
  selectedTags: any[] = [];
  dateRange: Date[] | null = null;

  // Distribution chips
  distribution: Array<{label: string; count: number; variant: 'normal' | 'warning' | 'anomaly' | 'offline'}> = [
    { label:'Normal', count:288, variant:'normal' },
    { label:'Warning', count:64, variant:'warning' },
    { label:'Anomaly', count:21, variant:'anomaly' },
    { label:'Offline', count:35, variant:'offline' },
  ];

  // KPI matrix tiles
  matrixTiles: Array<{label: string; value: string | number; trend?: 'up' | 'down' | 'flat'}> = [
    { label:'CPU Usage', value:'38%', trend:'up' },
    { label:'Memory Usage', value:'62%', trend:'down' },
    { label:'Disk', value:'71%', trend:'up' },
    { label:'Latency', value:'120ms', trend:'up' },
    { label:'Errors', value:'0.9%', trend:'down' },
    { label:'Throughput', value:'2.3k/s', trend:'up' },
  ];

  // Chart sample
  labels = ['W1','W2','W3','W4','W5','W6','W7','W8'];
  series = [
    { label:'Temperature', data:[20,22,24,23,25,26,24,27], borderColor:'rgba(251,146,60,1)', backgroundColor:'rgba(251,146,60,0.14)' },
    { label:'Heart Rate', data:[70,72,71,74,73,75,74,76], borderColor:'rgba(244,114,182,1)', backgroundColor:'rgba(244,114,182,0.12)' },
  ];

  // Table
  columns = [
    { field:'device', header:'Device', width:'220px' },
    { field:'location', header:'Location', width:'140px' },
    { field:'department', header:'Department', width:'160px' },
    { field:'lastSeen', header:'Last Seen', width:'120px' },
    { field:'uptime', header:'Uptime', width:'100px' },
    { field:'status', header:'Status', width:'120px' },
    { field:'risk', header:'Risk', width:'120px' },
  ];

  rows = [
    { device:'Alpha-01', location:'New York', department:'Cardiology', lastSeen:'2 mins ago', uptime:'99.98%', status:'Normal', risk:'Low' },
    { device:'Beta-09', location:'Chicago', department:'Oncology', lastSeen:'5 mins ago', uptime:'99.12%', status:'Warning', risk:'Medium' },
    { device:'Gamma-22', location:'San Jose', department:'ICU', lastSeen:'12 mins ago', uptime:'97.83%', status:'Anomaly', risk:'High' },
    { device:'Delta-15', location:'Dallas', department:'Radiology', lastSeen:'1 hour ago', uptime:'96.45%', status:'Offline', risk:'Critical' },
  ];

  // Pagination two-way bound with PaginationBar
  first = 0;
  pageRows = 10;
  totalRecords = 200;
}
