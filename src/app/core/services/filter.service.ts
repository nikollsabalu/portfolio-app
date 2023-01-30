import { Injectable } from '@angular/core';
import { FilterModule } from './filter.module';

@Injectable({
    providedIn: FilterModule
})
export class FilterService {
    private angular = false;
    private react = false;
    private vue = false;
    private all = true;

    get filter(): string {

        return this.all ? 'all' :
                this.angular ? 'angular' :
                this.react ? 'react' : 'vue';
    }

    setAngular(  ): void {
        this.all = false;
        this.react = false;
        this.vue = false;
        this.angular = true;

    }

    setReact(  ): void {
        this.all = false;
        this.vue = false;
        this.angular = false;
        this.react = true;

    }

    setVue(  ): void {
        this.all = false;
        this.react = false;
        this.angular = false;
        this.vue = true;
    }

    setAll(  ): void {
        this.all = true;
        this.react = false;
        this.angular = false;
        this.vue = false;
    }
}
