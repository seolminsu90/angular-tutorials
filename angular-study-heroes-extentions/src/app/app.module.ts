import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchComponent } from './search/search.component';
import { HighlightDirective } from './highlight.directive';
import { CustomPipe } from './custom.pipe';
import { FormTestComponent } from './form/form-test.component';
import { FormTestComponent as FormTestComponent2 } from './form2/form-test.component';
import { PipeTestComponent } from './pipe/pipe-test.component';
import { DirectiveTestComponent } from './directive/directive-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsComponent,
    MessageComponent,
    DashboardComponent,
    SearchComponent,
    FormTestComponent,
    FormTestComponent2,
    PipeTestComponent,
    DirectiveTestComponent,

    HighlightDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule 모듈은 HTTP 요청을 가로채고 서버의 응답을 흉내냅니다.
    // 실제 서버가 준비되면 이 부분을 제거하면 됩니다.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
