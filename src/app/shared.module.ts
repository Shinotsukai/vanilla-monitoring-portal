import { CurrencyPipe, DatePipe, PercentPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { CellFormatPipe } from "./components/datatable/cell-format.pipe";
import { UOMFormatPipe } from "./components/sensor-grid/sensor-grid-uom.pipe";
import { TimeAgoPipe, TimePipe } from "./time.pipe";
import { SlotDataPipe } from "./utils/sensorFilter.pipe";

@NgModule({
    declarations:[
        CellFormatPipe,
        TimePipe,
        TimeAgoPipe,
        UOMFormatPipe,
        SlotDataPipe
    ],
    exports:[CellFormatPipe,TimePipe,TimeAgoPipe,UOMFormatPipe,SlotDataPipe],
    providers:[DatePipe,CurrencyPipe,PercentPipe]
})

export class SharedModule{}