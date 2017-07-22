var express = require('express');
var router = express.Router();

var db = require('../models');
var stylist = db.Stylist;

    //redirect to home page
    router.get('/', function (req,res){
        res.redirect('/home')
    });

    router.get('/home', function (req,res){
       res.render('index', {title: "Stile", layout: 'main'})
    });

    router.get('/available', function (req, res){
        //console.log();
        stylist.findAll({}).then(function(data){
           let hbsObject = {
               stylist: data
           };
            res.render('available', hbsObject);
        });

    });

    router.get('/available/morning', function (req,res){
       stylist.findAll({
           where: {
               start_time: "8:00a"
           }
       }).then(function(data){
           let hbsObject = {
               stylist: data
           };

           res.render('available', hbsObject);
       })
    });

    router.get('/available/afternoon', function (req, res){

        stylist.findAll({
            where: {
                start_time: {
                    $in: ["2:00p", "3:00p", "4:00p", "5:00p"]
                }
            }
        }).then(function(data){
            let hbsObject = {
                stylist: data
            };

            res.render('available', hbsObject);
        })
    });

    router.get

module.exports = router;
