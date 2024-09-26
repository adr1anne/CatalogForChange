

   //  COLORS

   var g_map_backgroundColor = "transparent";        // background to draw map on
   var g_map_borderColor = "white";            // state border color  
   var g_map_highlightBorderColor = "red";  // highlighted state border color

   var g_map_baseRGB = [128,128,128];          // state color default
   var g_map_highlightRGB = [255, 255, 255];       // state color when highlighted

   var g_map_infoBoxFillRGB   = [255, 255, 255];       // info box background color
   var g_map_infoBoxBorderRGB = [236, 82, 235]; // info box border color
   var g_map_infoBoxTextRGB   = [177, 1, 71]; // info box text color

   var g_map_useInfoBox = true;  // default to use the info box for all states
   var g_map_isIE9 = false;      // must detect IE9 for proper mouse position


   
   var g_map_stateMap = null;

 
   var g_map_canvas;
   var g_map_context;
   var g_map_renderInterval;
 


   function map_userSetup()
   {
      

      for ( var abbrev in g_map_stateMap )
      {
         var state = g_map_stateMap[abbrev]; 
         var nameAndAbbrev = state.myPrettyName + "  (" + state.myAbbrev + ")";

         state.setInfoBoxText(nameAndAbbrev);
         state.addInfoBoxText("");
        
      }


      g_map_stateMap["AL"].addInfoBoxText("Status: Illegal");
      g_map_stateMap["AL"].myBaseRGB = [89, 7, 15];
   
      g_map_stateMap["AK"].addInfoBoxText("Status: Protected");
      g_map_stateMap["AK"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["AZ"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["AZ"].myBaseRGB =  [191, 11, 8];
     
      g_map_stateMap["AR"].addInfoBoxText("Status: Illegal");
      g_map_stateMap["AR"].myBaseRGB =  [89, 7, 15];
     
      g_map_stateMap["CA"].addInfoBoxText("Status: Protected");
      g_map_stateMap["CA"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["CO"].addInfoBoxText("Status: Protected");
      g_map_stateMap["CO"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["CT"].addInfoBoxText("Status: Protected");
      g_map_stateMap["CT"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["DC"].addInfoBoxText("Status: Protected");
      g_map_stateMap["DC"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["DE"].addInfoBoxText("Status: Protected");
      g_map_stateMap["DE"].myBaseRGB = [240, 218, 32]; 
     
      g_map_stateMap["FL"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["FL"].myBaseRGB = [191, 11, 8];

      g_map_stateMap["GA"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["GA"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["HI"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["HI"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["ID"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["ID"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["IL"].addInfoBoxText("Status: Protected");
      g_map_stateMap["IL"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["IN"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["IN"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["IA"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["IA"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["KS"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["KS"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["KY"].addInfoBoxText("Status: Illegal");
      g_map_stateMap["KY"].myBaseRGB =  [89, 7, 15];
     
      g_map_stateMap["LA"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["LA"].myBaseRGB =  [191, 11, 8];
     
      g_map_stateMap["ME"].addInfoBoxText("Status: Protected");
      g_map_stateMap["ME"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["MD"].addInfoBoxText("Status: Protected");
      g_map_stateMap["MD"].myBaseRGB =  [110, 221, 143];

      g_map_stateMap["MA"].addInfoBoxText("Status: Protected");
      g_map_stateMap["MA"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["MI"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["MI"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["MN"].addInfoBoxText("Status: Protected");
      g_map_stateMap["MN"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["MS"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["MS"].myBaseRGB = [191, 11, 8];

      g_map_stateMap["MO"].addInfoBoxText("Status: Illegal");
      g_map_stateMap["MO"].myBaseRGB =  [89, 7, 15];
     
      g_map_stateMap["MT"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["MT"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["NE"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["NE"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["NV"].addInfoBoxText("Status: Protected");
      g_map_stateMap["NV"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["NH"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["NH"].myBaseRGB = [231, 146, 51]; 

      g_map_stateMap["NJ"].addInfoBoxText("Status: Protected");
      g_map_stateMap["NJ"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["NM"].addInfoBoxText("Status: Protected");
      g_map_stateMap["NM"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["NY"].addInfoBoxText("Status: Protected");
      g_map_stateMap["NY"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["NC"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["NC"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["ND"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["ND"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["OH"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["OH"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["OK"].addInfoBoxText("Status: Illegal");
      g_map_stateMap["OK"].myBaseRGB =  [89, 7, 15];
     
      g_map_stateMap["OR"].addInfoBoxText("Status: Protected");
      g_map_stateMap["OR"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["PA"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["PA"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["RI"].addInfoBoxText("Status: Protected");
      g_map_stateMap["RI"].myBaseRGB = [240, 218, 32]; 
     
      g_map_stateMap["SC"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["SC"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["SD"].addInfoBoxText("Status: Illegal");
      g_map_stateMap["SD"].myBaseRGB =  [89, 7, 15];
     
      g_map_stateMap["TN"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["TN"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["TX"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["TX"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["UT"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["UT"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["VT"].addInfoBoxText("Status: Protected");
      g_map_stateMap["VT"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["VA"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["VA"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["WA"].addInfoBoxText("Status: Protected");
      g_map_stateMap["WA"].myBaseRGB =  [110, 221, 143];
     
      g_map_stateMap["WV"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["WV"].myBaseRGB = [191, 11, 8];
     
      g_map_stateMap["WI"].addInfoBoxText("Status: Not Protected");
      g_map_stateMap["WI"].myBaseRGB = [231, 146, 51];
     
      g_map_stateMap["WY"].addInfoBoxText("Status: Hostile");
      g_map_stateMap["WY"].myBaseRGB = [191, 11, 8];

     // more info

     // trigger laws? hwo can trigger laws be sued statewise
      
      g_map_stateMap["DC"].addInfoBoxText("Legal");
     g_map_stateMap["DC"].addInfoBoxText("");
     g_map_stateMap["DC"].addInfoBoxText("Current limit: Viability");
     
      g_map_stateMap["AL"].addInfoBoxText("No exceptions");
      g_map_stateMap["AL"].addInfoBoxText("");
      g_map_stateMap["AL"].addInfoBoxText("When in effect: Now");
     
     
      g_map_stateMap["AK"].addInfoBoxText("Legal");
      g_map_stateMap["AK"].addInfoBoxText("");
      g_map_stateMap["AK"].addInfoBoxText("No gestational limit");
          
      g_map_stateMap["AZ"].addInfoBoxText("Ban / severe restrictions soon");
      g_map_stateMap["AZ"].addInfoBoxText("");
      g_map_stateMap["AZ"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["AZ"].addInfoBoxText("");
      g_map_stateMap["AZ"].addInfoBoxText("Governor seeks to ask court to reinforce a blocked pre-Roe law that would ban abortion with no exceptions. Ban at 15 weeks to take effect in September");

     
     
      g_map_stateMap["AR"].addInfoBoxText("No exceptions");
      g_map_stateMap["AR"].addInfoBoxText("");
      g_map_stateMap["AR"].addInfoBoxText("When in effect: Now");
      g_map_stateMap["AR"].addInfoBoxText("");
      g_map_stateMap["AR"].addInfoBoxText("Trigger law: In effect as of June 24, prohibits all abortion");
  
     
      g_map_stateMap["CA"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["CA"].addInfoBoxText("");
      g_map_stateMap["CA"].addInfoBoxText("Current limit: Viability");
     
      g_map_stateMap["CO"].addInfoBoxText("Legal");
      g_map_stateMap["CO"].addInfoBoxText("");
      g_map_stateMap["CO"].addInfoBoxText("No gestational limit");
      g_map_stateMap["CO"].addInfoBoxText("");
      g_map_stateMap["CO"].addInfoBoxText("Protected by state law");
     
      g_map_stateMap["CT"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["CT"].addInfoBoxText("");
      g_map_stateMap["CT"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["CT"].addInfoBoxText("");
      g_map_stateMap["CT"].addInfoBoxText("Protected by state law");
    
     
      g_map_stateMap["DE"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["DE"].addInfoBoxText("");
      g_map_stateMap["DE"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["DE"].addInfoBoxText("");
      g_map_stateMap["DE"].addInfoBoxText("Protected by state law");

    
      g_map_stateMap["FL"].addInfoBoxText("Uncertain");
      g_map_stateMap["FL"].addInfoBoxText("");
      g_map_stateMap["FL"].addInfoBoxText("Current limit: 24 weeks");
      g_map_stateMap["FL"].addInfoBoxText("");
      g_map_stateMap["FL"].addInfoBoxText("15-week ban temporarily blocked by judge, Republican governer and legislature seek more restrictions to come");

      g_map_stateMap["GA"].addInfoBoxText("Ban / severe restrictions soon");
      g_map_stateMap["GA"].addInfoBoxText("");
      g_map_stateMap["GA"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["GA"].addInfoBoxText("");
      g_map_stateMap["GA"].addInfoBoxText("State enacted six week ban, but a court blocked it. State filed an appeal and will likely take effect pending ruling");

      g_map_stateMap["HI"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["HI"].addInfoBoxText("");
      g_map_stateMap["HI"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["HI"].addInfoBoxText("");
      g_map_stateMap["HI"].addInfoBoxText("Protected by state law");
     
      g_map_stateMap["ID"].addInfoBoxText("Ban / severe restrictions soon");
      g_map_stateMap["ID"].addInfoBoxText("");
      g_map_stateMap["ID"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["ID"].addInfoBoxText("");
      g_map_stateMap["ID"].addInfoBoxText("Trigger law: banning nearly all abortions 30 days post-Roe, lawsuit filed by Planned Parenthood to challenge");
     
      g_map_stateMap["IL"].addInfoBoxText("Legal");
      g_map_stateMap["IL"].addInfoBoxText("");
      g_map_stateMap["IL"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["IL"].addInfoBoxText("");
      g_map_stateMap["IL"].addInfoBoxText("State high court recognized abortion protections, state law protects procedures");
     
      g_map_stateMap["IN"].addInfoBoxText("Uncertain");
      g_map_stateMap["IN"].addInfoBoxText("");
      g_map_stateMap["IN"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["IN"].addInfoBoxText("");
      g_map_stateMap["IN"].addInfoBoxText("Governer to call a special session of state legislature in early July and legislators may consider new laws restricting abortion");

      g_map_stateMap["IA"].addInfoBoxText("Uncertain");
      g_map_stateMap["IA"].addInfoBoxText("");
      g_map_stateMap["IA"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["IA"].addInfoBoxText("");
      g_map_stateMap["IA"].addInfoBoxText("6-week ban passed in 2018 then permenantly blocked by judge, but governer seeks to reinstate heartbeat law");

      g_map_stateMap["KY"].addInfoBoxText("No exceptions");
      g_map_stateMap["KY"].addInfoBoxText(" ");
      g_map_stateMap["KY"].addInfoBoxText("When in effect: Now");
      g_map_stateMap["KY"].addInfoBoxText(" ");
      g_map_stateMap["KY"].addInfoBoxText("Trigger law: Abortion is now illegal in Kentucky");

      g_map_stateMap["KS"].addInfoBoxText("Uncertain");
      g_map_stateMap["KS"].addInfoBoxText(" ");
      g_map_stateMap["KS"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["KS"].addInfoBoxText(" ");
      g_map_stateMap["KS"].addInfoBoxText("A voter referendum in the fall will decide whether the state constitution protects abortion");
        
      g_map_stateMap["LA"].addInfoBoxText("Ban / severe restrictions soon");
      g_map_stateMap["LA"].addInfoBoxText(" ");
      g_map_stateMap["LA"].addInfoBoxText("Current limit: Unclear (22-week or 15-week");
      g_map_stateMap["LA"].addInfoBoxText(" ");
      g_map_stateMap["LA"].addInfoBoxText("Trigger law: Temporarily blocked by judge, July 8th scheduled hearing");
     

      g_map_stateMap["ME"].addInfoBoxText("Legal");
      g_map_stateMap["ME"].addInfoBoxText("");
      g_map_stateMap["ME"].addInfoBoxText("Current limit: Viability");
     
     
      g_map_stateMap["MD"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["MD"].addInfoBoxText("");
      g_map_stateMap["MD"].addInfoBoxText("Current limit: Viability");
    
      g_map_stateMap["MA"].addInfoBoxText("Legal");
      g_map_stateMap["MA"].addInfoBoxText("");
      g_map_stateMap["MA"].addInfoBoxText("Current limit: 24 weeks");
     
      g_map_stateMap["MI"].addInfoBoxText("Uncertain");
      g_map_stateMap["MI"].addInfoBoxText(" ");
      g_map_stateMap["MI"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["MI"].addInfoBoxText(" ");
      g_map_stateMap["MI"].addInfoBoxText("Pre-Roe law would ban all aboartions, but blocked by state court. Governer and attorney general said they will not enforce ban");
     
      g_map_stateMap["MN"].addInfoBoxText("Legal");
      g_map_stateMap["MN"].addInfoBoxText(" ");
      g_map_stateMap["MN"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["MN"].addInfoBoxText(" ");
      g_map_stateMap["MN"].addInfoBoxText("State's high court recognized right to abortion under its Constitution");
     
     
      g_map_stateMap["MS"].addInfoBoxText("Ban soon");
      g_map_stateMap["MS"].addInfoBoxText(" ");
      g_map_stateMap["MS"].addInfoBoxText("Current limit: 15-weeks");
      g_map_stateMap["MS"].addInfoBoxText(" ");
      g_map_stateMap["MS"].addInfoBoxText("Trigger law: Takes effect July 7 banning nearly all abortions");
     
     
      g_map_stateMap["MO"].addInfoBoxText("No exceptions");
      g_map_stateMap["MO"].addInfoBoxText(" ");
      g_map_stateMap["MO"].addInfoBoxText("When in effect: Now");
     
   
      g_map_stateMap["MT"].addInfoBoxText("Uncertain");
      g_map_stateMap["MT"].addInfoBoxText(" ");
      g_map_stateMap["MT"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["MT"].addInfoBoxText(" ");
      g_map_stateMap["MT"].addInfoBoxText("20-week ban put on hold by judge, could change");
     

      g_map_stateMap["NE"].addInfoBoxText("Uncertain");
      g_map_stateMap["NE"].addInfoBoxText(" ");
      g_map_stateMap["NE"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["NE"].addInfoBoxText(" ");
      g_map_stateMap["NE"].addInfoBoxText("Trigger law: Bill to enact failed in legislature this year. Governer expected to call special session to pass total ban");
     
     
      g_map_stateMap["NV"].addInfoBoxText("Legal");
      g_map_stateMap["NV"].addInfoBoxText("");
      g_map_stateMap["NV"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["NV"].addInfoBoxText("")
   //  g_map_stateMap["NV"].addInfoBoxText("State law protects abortion, affirmed by voters")
     
      g_map_stateMap["NH"].addInfoBoxText("Legal");
      g_map_stateMap["NH"].addInfoBoxText("");
      g_map_stateMap["NH"].addInfoBoxText("Current limit: 24 weeks");
      g_map_stateMap["NH"].addInfoBoxText("")
      g_map_stateMap["NH"].addInfoBoxText("Will likely stay accessible though not expressly protected by state law")
     
      g_map_stateMap["NJ"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["NJ"].addInfoBoxText("");
      g_map_stateMap["NJ"].addInfoBoxText("No gestational limit");
     
     
      g_map_stateMap["NM"].addInfoBoxText("Legal");
      g_map_stateMap["NM"].addInfoBoxText("");
      g_map_stateMap["NM"].addInfoBoxText("No gestational limit");
      g_map_stateMap["NM"].addInfoBoxText("");
      g_map_stateMap["NM"].addInfoBoxText("Order signed by governer to protect abortion");
     
      g_map_stateMap["NY"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["NY"].addInfoBoxText("");
      g_map_stateMap["NY"].addInfoBoxText("Current limit: Viability");
     
      g_map_stateMap["NC"].addInfoBoxText("Uncertain");
      g_map_stateMap["NC"].addInfoBoxText(" ");
      g_map_stateMap["NC"].addInfoBoxText("Current limit: Viability");
      g_map_stateMap["NC"].addInfoBoxText(" ");
      g_map_stateMap["NC"].addInfoBoxText("Republicans call for enforcement of 20-week ban");
     
      g_map_stateMap["ND"].addInfoBoxText("Ban / severe restrictions soon");
      g_map_stateMap["ND"].addInfoBoxText(" ");
      g_map_stateMap["ND"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["ND"].addInfoBoxText(" ");
      g_map_stateMap["ND"].addInfoBoxText("Trigger law: Banning nearly all abortions set to take effect on July 28th");

     
       g_map_stateMap["OH"].addInfoBoxText("Ban soon");
      g_map_stateMap["OH"].addInfoBoxText(" ");
      g_map_stateMap["OH"].addInfoBoxText("Current limit: 6 weeks");
      g_map_stateMap["OH"].addInfoBoxText(" ");
      g_map_stateMap["OH"].addInfoBoxText("ACLU and Planned Parenthood filed lawsuit seeking to block 'heartbeat' ban. Republican controlled legislature and governer likely to pass full ban");

      g_map_stateMap["OK"].addInfoBoxText("Exceptions for rape and incest");
      g_map_stateMap["OK"].addInfoBoxText(" ");
      g_map_stateMap["OK"].addInfoBoxText("When in effect: Now");
      g_map_stateMap["OK"].addInfoBoxText(" ");
      g_map_stateMap["OK"].addInfoBoxText("Trigger law: Abortion is now illegal at the point of fertilization (0 week)");

      g_map_stateMap["OR"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["OR"].addInfoBoxText(" ");
      g_map_stateMap["OR"].addInfoBoxText("No gestational limit");
      g_map_stateMap["OR"].addInfoBoxText(" ");
      g_map_stateMap["OR"].addInfoBoxText("Legislature approved $15 million to support those seeking the procedure");

      g_map_stateMap["PA"].addInfoBoxText("Uncertain");
      g_map_stateMap["PA"].addInfoBoxText(" ");
      g_map_stateMap["PA"].addInfoBoxText("Current limit: 24 weeks");
      g_map_stateMap["PA"].addInfoBoxText(" ");
      g_map_stateMap["PA"].addInfoBoxText("Republicans control state legislature, but current Democratic governor has vetoed restrictions");

      g_map_stateMap["RI"].addInfoBoxText("Legal");
      g_map_stateMap["RI"].addInfoBoxText(" ");
      g_map_stateMap["RI"].addInfoBoxText("Current limit: Viability");


      g_map_stateMap["SC"].addInfoBoxText("Ban soon");
      g_map_stateMap["SC"].addInfoBoxText(" ");
      g_map_stateMap["SC"].addInfoBoxText("Current limit: 6 weeks");
      g_map_stateMap["SC"].addInfoBoxText(" ");
      g_map_stateMap["SC"].addInfoBoxText("Bill introduced to fully ban and criminalize abortions, expected to further discuss this summer");
     
       g_map_stateMap["SD"].addInfoBoxText("No exceptions");
      g_map_stateMap["SD"].addInfoBoxText(" ");
      g_map_stateMap["SD"].addInfoBoxText("When in effect: Now");
     g_map_stateMap["SD"].addInfoBoxText(" ");
      g_map_stateMap["SD"].addInfoBoxText("Trigger law: Also bans anyone from performing or providing for abortions.");
     
      g_map_stateMap["TN"].addInfoBoxText("Ban soon");
      g_map_stateMap["TN"].addInfoBoxText(" ");
      g_map_stateMap["TN"].addInfoBoxText("Current limit: 6 weeks");
      g_map_stateMap["TN"].addInfoBoxText(" ");
      g_map_stateMap["TN"].addInfoBoxText("Trigger law: Takes effect 30 days post-Roe,  woill ban nearly all abortions with no exxceptions for rape or incest");
     
      g_map_stateMap["TX"].addInfoBoxText("Ban soon");
      g_map_stateMap["TX"].addInfoBoxText(" ");
      g_map_stateMap["TX"].addInfoBoxText("Current limit: 6 weeks");
      g_map_stateMap["TX"].addInfoBoxText(" ");
      g_map_stateMap["TX"].addInfoBoxText("Trigger law: No exceptions, set to take effect 30 days post-Roe");

   
      g_map_stateMap["UT"].addInfoBoxText("Ban soon");
      g_map_stateMap["UT"].addInfoBoxText(" ");
      g_map_stateMap["UT"].addInfoBoxText("Current limit: 18 weeks");
      g_map_stateMap["UT"].addInfoBoxText(" ");
      g_map_stateMap["UT"].addInfoBoxText("Trigger law: Set to ban abortion in state, temporarily blocked by judge");

     
      g_map_stateMap["VT"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["VT"].addInfoBoxText("");
      g_map_stateMap["VT"].addInfoBoxText("No gestational limit");

     
      g_map_stateMap["VA"].addInfoBoxText("Uncertain");
      g_map_stateMap["VA"].addInfoBoxText(" ");
      g_map_stateMap["VA"].addInfoBoxText("Current limit: 3rd trimester");
      g_map_stateMap["VA"].addInfoBoxText(" ");
      g_map_stateMap["VA"].addInfoBoxText("The ACLU  filed a lawsuit to block the state's pre-Roe ban, which prohibiedt abortion with no exceptions and criminalized providers");

     
      g_map_stateMap["WA"].addInfoBoxText("Legal and expanded");
      g_map_stateMap["WA"].addInfoBoxText("");
      g_map_stateMap["WA"].addInfoBoxText("Current limit: Viability");

          
      g_map_stateMap["WV"].addInfoBoxText("Ban soon");
      g_map_stateMap["WV"].addInfoBoxText(" ");
      g_map_stateMap["WV"].addInfoBoxText("Current limit: 22 weeks");
      g_map_stateMap["WV"].addInfoBoxText(" ");
      g_map_stateMap["WV"].addInfoBoxText("Abortion is not protected by state law. Republicans control state legislature, but current Democratic governor has vetoed restrictions");

             
      g_map_stateMap["WI"].addInfoBoxText("Uncertain");
      g_map_stateMap["WI"].addInfoBoxText(" ");
      g_map_stateMap["WI"].addInfoBoxText("Current limit: 0 weeks, not enforced");
      g_map_stateMap["WI"].addInfoBoxText(" ");
      g_map_stateMap["WI"].addInfoBoxText("Has pre-Roe law banning abortion and criminalizing providers. Democratic governor and attorney general are not enforcing, filed lawsuit to block");

             
      g_map_stateMap["WY"].addInfoBoxText("Ban soon");
      g_map_stateMap["WY"].addInfoBoxText(" ");
      g_map_stateMap["WY"].addInfoBoxText("Current limit: 6 weeks");
      g_map_stateMap["WY"].addInfoBoxText(" ");
      g_map_stateMap["WY"].addInfoBoxText("Trigger law: To take effect 30 days post-Roe, after state officials certify new law");


      for ( var abbrev in g_map_stateMap )
      {
         var state = g_map_stateMap[abbrev]; 
        
         state.addInfoBoxText("");
         state.addInfoBoxText("");
  


      
      }

      
      return;
}


