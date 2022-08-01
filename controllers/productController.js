const fs = require('fs');
const path = require('path');

const productController = {
	indexFundo: (req, res) => {
		res.render('./Prato Fundo/pratoFundo')},

        indexRaso: (req, res) => {
                res.render('./Prato Raso/produto')},

        indexSobremesa: (req, res) => {
                res.render('./Prato Sobremesa/pratosobremesa')},

        indexSousplat: (req, res) => {
                res.render('./Sousplat/sousplat')},

        index20Pecas: (req, res) => {
                res.render('./20 pecas/20Pecas')},

        index30Pecas: (req, res) => {
                res.render('./30 pecas/30Pecas')},

        index42Pecas: (req, res) => {
                res.render('./42 pecas/42Pecas')},

        indexBowls: (req, res) => {
                res.render('./Bowls/bowls')},

        indexCanecas: (req, res) => {
                res.render('./Canecas/canecas')},

        indexPetisqueiras: (req, res) => {
                res.render('./Petisqueiras/petisqueiras')},

        indexPratoDeBolo: (req, res) => {
                res.render('./Prato de bolo/pratoDeBolo')},

        indexTigelas: (req, res) => {
                res.render('./Tigelas/tigelas')},

        indexTravessas: (req, res) => {
                res.render('./Travessas/travessas')},

        indexXicaraDeCafe: (req, res) => {
                res.render('./Xicara de cafe/xicaraDeCafe')},

        indexXicaraDeCha: (req, res) => {
                res.render('./Xicara de cha/xicaraDeCha')}
    
    
        
    
    };





module.exports = productController;