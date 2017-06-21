import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'navcircle',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavCircle implements OnInit {
    private _RADIUS = 100;
    private _SEG = 250;
    private _OFFSET = 120;
    private _THETAINIT = Math.PI;

    private _navHidden = false;

    private _hiddenNavItems = [];
    
    private _navItemIds = ["hideli","hubli","myprofileli","galleryli","inboxli","notificationli"]; //list of id's od elements that will be on the nav circle
    private _navItems = [];


    private _navContainerOffset: ClientRect;
    private _navItemsCount;
    
    ngOnInit(){
        this._navContainerOffset = document.getElementById('navcontainter').getBoundingClientRect(); 
        console.log(this._navContainerOffset);  //for testing  

        
        this._navItemsCount = this._navItemIds.length-1;
        console.log(this._navItemsCount); //for testing


        let theta = this._THETAINIT / this._navItemsCount;
        console.log(theta); //for testing
        this._navItems = this.initNavItems(theta);

        console.log(this._navItems); //for testing
        console.log(this._navItemIds); //for testing 

        this.setNavItemLocations();

        
    }


    private initNavItems(theta){
        let add = (2*Math.PI)/3;
        let navItems = [];
        for(let i=0; i <= this._navItemsCount; i++){
            navItems.push({
               id:this._navItemIds[i],
                x:this._RADIUS * Math.cos(add) + this._OFFSET,
                y:this._RADIUS * Math.sin(add) + this._OFFSET
            });
            add += theta;
        }
        return navItems;
    }

    private setNavItemLocations(){
        for(let i=0; i <= this._navItemsCount; i++){
            let elem = document.getElementById(this._navItems[i].id);
            elem.style.top = this._navItems[i].y + 'px';
            elem.style.right = this._navItems[i].x + 'px';
            elem.style.display = 'block';
        }
    }

    private hideNav(){
        if(this._navHidden){
            this.showNav();
        }else{
            for(let i=this._navItemsCount; i >= 0; i--){
                let tempItem = this._navItems[i];
                let elem = document.getElementById(tempItem.id);
                if(i==0){
                    elem.style.top = '5px';
                    elem.style.right = '180px';
                }else{

                    elem.style.display = 'none';

                }
            }
            let elem = document.getElementById("maincircle");
            elem.style.display = 'none';
            this._navHidden = true;
        }
    }

    private showNav(){
        for(let i=0; i <= this._navItemsCount; i++){
                let elem = document.getElementById(this._navItems[i].id);
                if(i==0){
                    console.log(this._navItems[i].y);
                    elem.style.top = this._navItems[i].y + 'px';
                    elem.style.right = this._navItems[i].x + 'px';
                }else{
                    elem.style.display = 'block';
                }
        }
        let elem = document.getElementById("maincircle");
        elem.style.display = 'block';
        this._navHidden = false;
    }

    private getCurrentPos(elem){
        
    }

}