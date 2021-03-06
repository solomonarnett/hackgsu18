import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from '../_animations/fadeInAnimation';
import { Router } from '@angular/router';
import { AboutWindowHandlerService } from '../about-window-handler.service';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  actionGroupActions:Array<string> = [
    // Registration Link
    // "http://goo.gl/ESF8Mj",
    // Preregistration Link
    "https://goo.gl/forms/mndU8vm6mHVKYXcD2",
    //Volunteer Link
    // "https://hackgsuspring2018.typeform.com/to/Jxrdks",
    // Sponsor Us Link
    "http://sponsors.hackgsu.com/hackGSU_Sponsorship_packet.pdf",
    // FAQ Link
    "#faq",
    // Travel Reimbursment Link
    "https://hackgsuspring2018.typeform.com/to/EM26kg",
    // "#"
  ];

  loaded:boolean = false;
  pageLoading:boolean = false;
  aboutState:boolean =  false;

  toggleLoad(){
    this.loaded = this.loaded ? false : true
  }

  aboutToggle(){
    this.aboutwindowhandler.openWindow()
  }

  setAboutWindowState(state:boolean){
    this.aboutState = state
    this.loaded = !state
  }

  loadInOutAnimation(){
    return (this.loaded ? 'active' : 'inactive') + ' ' + (this.pageLoading ? 'loading' : 'notLoading')
  }

  startLoad(){
    this.pageLoading = true
    setTimeout(()=>{
      this.loaded = true
    }, 50)
    
    setTimeout(()=>{
      this.stopLoad()
    }, 450)
  }

  stopLoad(){
    this.pageLoading = false
  }

  goto(where:string){
    
    this.pageLoading = true
    setTimeout(()=>{
      this.loaded = false
    }, 50)
    
    setTimeout(()=>{
      this.stopLoad()
      this.router.navigateByUrl(where)
    }, 450)
  }

  subGroupActions:Array<string> = [
    "mailto:hackathon@cs.gsu.edu",
    // slack
    // "https://goo.gl/ByrTkF",
    "https://join.slack.com/t/hackgsufall2018/shared_invite/enQtMzc2MjIzNDMyNDE2LWMzZWU0NDU4M2U4YjI3ZWVjNDdjZTlhZThiNjU3MjM0NDY5NGY1ZDlkZjM3ZTdkNDhkNGVhMTBkYTFjOTc3MDc",
    // "#",
    // google form registration
    "https://goo.gl/forms/Pimkr6twZ2Q2YoJ52",
    // "#"
  ]
  constructor(private router:Router, private aboutwindowhandler:AboutWindowHandlerService) { 
    aboutwindowhandler.windowOpenState$.subscribe(
      windowState => {
        this.setAboutWindowState(windowState)
      }
    )
  }

  ngOnInit() {
    // this.toggleLoad()
    this.startLoad()
  }

}
