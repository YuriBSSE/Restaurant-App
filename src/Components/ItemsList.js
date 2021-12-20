import React, {useEffect, useState,useRef} from 'react';
import {
    View,Text,Image,TouchableOpacity
 } from 'react-native';
import TextSample from './Text';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {deploy_API} from  './../Config/Apis.json'
import { TouchableRipple } from 'react-native-paper';
import * as actions from '../Store/Actions'
import {connect} from "react-redux";
import {Avatar} from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
 const ItemsList = ({
    ItemID,
    RestaurantID,
    RestaurantName,
    CategoryID,
    ItemStatus,
    Title,
    Images,
    Price,
    Navigation,
    Description
 }) => {


        return( 
            <View key={ItemID} style={{ 
            width: '45%', 
            height: 250,    
            borderRadius: 12, 
            justifyContent:'space-between',
            alignSelf:'center',
            backgroundColor:'white',
            flexDirection:'column',
            alignItems:'center',
            margin: 10,
            // zIndex: 9999, elevation: 4
            }}>
                 <LinearGradient
               start={{ x: 0, y: 1  }}
               end={{ x: 0, y: -1 }}
               colors={[ '#d6d6d6','white']}
               style={{ borderRadius: 14, width: '100%', height: 138, justifyContent:'center', alignItems:'center', opacity:0.8}}
               >
                {/* <View style={{}}> */}
                 <Image 
                  resizeMode='cover'
                  resizeMethod='auto'
                  style={{width: '100%', height: 138,borderRadius: 12,  }}
                  source={{uri: `${deploy_API+'/'+Images}`}}
                />
                {/* </View> */}
                </LinearGradient>
                <View style={{height: '50%', width:'100%', justifyContent:'flex-start', alignItems:'flex-start', padding: 5}}>
                <TextSample 
                                        Label={RestaurantName} 
                                        Color="black" 
                                        Size={hp("2%")} 
                                        TextAlign='left'
                                        NumberOfLines={3} 
                                        Font="Overpass-Regular"
                                        TextDecorationLine='none'
                                        TextTransform='none'
                /> 
                      <View style={{justifyContent:'space-between', width:'100%', flexDirection:'row'}}>
                        <TextSample 
                                                Label={Title} 
                                                Color="black" 
                                                Size={hp("1.5%")} 
                                                TextAlign='left'
                                                NumberOfLines={3} 
                                                Font="Overpass-Regular"
                                                TextDecorationLine='none'
                                                TextTransform='none'
                        /> 
                          <TextSample 
                                        Label={"$"+ Price} 
                                        Color="#f54749" 
                                        Size={hp("1.5%")} 
                                        TextAlign='center'
                                        NumberOfLines={3} 
                                        Font="Overpass-Regular"
                                        TextDecorationLine='none'
                                        TextTransform='none'
                            /> 
                     </View>
                 <TextSample 
                                        Label={"Zinger burger, chicken burger etc"} 
                                        Color="grey" 
                                        Size={hp("1.5%")} 
                                        TextAlign='left'
                                        NumberOfLines={3} 
                                        Font="Overpass-Regular"
                                        TextDecorationLine='none'
                                        TextTransform='none'
                />
               
             </View>
            <View style={{position: 'absolute', bottom: -10, width: '100%', height: 40,flexDirection:'row', alignItems:'center', justifyContent:'space-between',padding: 5}}>
            <View style={{justifyContent:'flex-start', width:'50%', flexDirection:'row'}}>
                      <Rating imageSize={15} ratingCount='1' readonly startingValue='0.6'  />
                      <TextSample 
                                        Label={"3.5"} 
                                        Color="#f54749" 
                                        Size={hp("1.5%")} 
                                        TextAlign='center'
                                        NumberOfLines={3} 
                                        Font="Overpass-Regular"
                                        TextDecorationLine='none'
                                         TextTransform='none'
                     /> 
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                     <TouchableOpacity style={{margin: 5, backgroundColor:'white'}} >
                                 <View style={{zIndex: 99999, elevation: 9, backgroundColor: '#f54749', width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems:'center', }}>
                                       <Ionicons name="home-sharp" style={{}} size={17} color='white' />
                                 </View>
                     </TouchableOpacity>
                     
                     <TouchableOpacity style={{margin: 5, backgroundColor:'white'}} onPress={()=> console.log("SAD")}>
                                 <View style={{zIndex: 99999, elevation: 9, backgroundColor: '#f54749', width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems:'center', }}>
                                       <Ionicons name="cart" style={{}} size={17} color='white' />
                                 </View>
                     </TouchableOpacity>
                </View>
             </View>
           </View>
    )
 }
 export default connect(null,actions)(ItemsList)
