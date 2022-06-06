import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Box } from "@mui/system";
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className='corDaBarra'>
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        Recentemente eu concluí o ensino médio e atualmente estudo na Generation Brasil, onde estou me formando como Desenvolvedora .Net
                        Sou proficiente em persistência e orientação aos detalhes, entusiasta da tecnologia, apaixonada por programação e ansiosa por desvendar os desafios que ela me proporciona.
                        Também desenvolvi ao longo desses meses projetos utilizando principalmente C#, Asp.Net ,Banco de Dados, Swagger e React, trabalhando com uma equipe incrivel que me ajudou a crescer bastante.
                        Por fim, tenho como meta me aprofundar mais na área e ingressar futuramente no ensino superior.
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;