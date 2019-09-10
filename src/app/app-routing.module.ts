import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SamplePostComponent } from './sample-post/sample-post.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
path:"",
component:HomeComponent
},
{
path:"about-us",
component:AboutUsComponent,
children:[
  {
path:'banner',
component:BannerComponent
  }
]
},
{
path:"sample-post",
component:SamplePostComponent
},
 {
  path:"sample-post/:id",
 component:SamplePostComponent
 },
{
path:"contact",
component:ContactComponent
},
{
  path:"table",
  component:TableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
