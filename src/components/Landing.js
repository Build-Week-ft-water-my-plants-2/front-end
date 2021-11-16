import React, { useState, useEffect } from 'react'
import axios from 'axios'


const initialPlant = {
    id: 1,
    nickname: 'SunFlower',
    species: '',
    h2oFrequency: '',
}


const initialFormValues = {
    nickname: '',
    species: '',
    h2oFrequency: '',
}

// SDASDASDASDASDASDASDASD