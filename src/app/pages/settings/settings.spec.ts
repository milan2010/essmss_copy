import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { } from 'jasmine';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app.component';
import { SettingsPage } from "./settings.component";
import { TranslateModule } from 'ng2-translate';

let comp: SettingsPage;
let fixture: ComponentFixture<SettingsPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Settings Page', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp, SettingsPage],

            providers: [
              NavController
            ],

            imports: [
                IonicModule.forRoot(MyApp),
                TranslateModule.forRoot()
            ]

        }).compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsPage);
        comp = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });

    it('intitial feed-filters are all set to true', () => {
        expect(comp['settings'].feed.calendar).toBeTruthy();
        expect(comp['settings'].feed.news).toBeTruthy();
        expect(comp['settings'].feed.expense).toBeTruthy();
        expect(comp['settings'].feed.message).toBeTruthy();
    });

    // not working due to ng2-translate
    // it('titlebar says "Einstellungen"', () => {
    //     de = fixture.debugElement.query(By.css('ion-title'));
    //     el = de.nativeElement;
    //     expect(el.textContent).toContain('Einstellungen');
    // });

});
