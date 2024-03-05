import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';


import { HomepageComponent } from './home/homepage/homepage.component';
import { ContactpageComponent } from './home/contactpage/contactpage.component';
import { ForgotpageComponent } from './home/forgotpage/forgotpage.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { SignuppageComponent } from './home/signuppage/signuppage.component';
import { UserhomepageComponent } from './user/userhomepage/userhomepage.component';
import { UserexpensetrackerComponent } from './user/userexpensetracker/userexpensetracker.component';
import { UsertransactionpageComponent } from './user/usertransactionpage/usertransactionpage.component';
import { UsertransactionhistoryComponent } from './user/usertransactionhistory/usertransactionhistory.component';
import { UserinvoiceComponent } from './user/userinvoice/userinvoice.component';
import { VendorhomepageComponent } from './vendor/vendorhomepage/vendorhomepage.component';
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { VendorlisttransactionComponent } from './vendor/vendorlisttransaction/vendorlisttransaction.component';
import { VendorproductComponent } from './vendor/vendorproduct/vendorproduct.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AdminlistuserComponent } from './admin/adminlistuser/adminlistuser.component';
import { AdminlistvendorComponent } from './admin/adminlistvendor/adminlistvendor.component';
import { AdminlisttransactionComponent } from './admin/adminlisttransaction/adminlisttransaction.component';

const routes: Routes = [

  //general view 
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "contact",
    component: ContactpageComponent,
  },

  {
    path: "forgot",
    component: ForgotpageComponent,
  },
  
  {
    path: "signup",
    component: SignuppageComponent,
  },

  //user view
  {
    path: "userhomepage",
    component: UserhomepageComponent,
  },

  {
    path: "userprofile",
    component: UserprofileComponent,
  },

  {
    path: "userexpensetracker",
    component: UserexpensetrackerComponent,
  },
  {
    path: "usertransactionpage",
    component: UsertransactionpageComponent,
  },
  {
    path: "usertransactionhistory",
    component: UsertransactionhistoryComponent,
  },
  {
    path: "userinvoice",
    component: UserinvoiceComponent,
  },

  //vendor view 
  {
    path: "vendorhomepage",
    component: VendorhomepageComponent,
  },
  {
    path: "vendorprofile",
    component: VendorprofileComponent,
  },
  {
    path: "vendorproduct",
    component: VendorproductComponent,
  },
  {
    path: "vendorlisttransaction",
    component: VendorlisttransactionComponent,
  },

  //admin view 

  {
    path: "adminhomepage",
    component: AdminhomepageComponent,
  },
  {
    path: "adminprofile",
    component: AdminprofileComponent,
  },
  {
    path: "adminlistuser",
    component: AdminlistuserComponent,
  },
  {
    path: "adminlistvendor",
    component: AdminlistvendorComponent,
  },
   {
    path: "adminlisttransaction",
    component: AdminlisttransactionComponent,
  },


  // template
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },

  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
