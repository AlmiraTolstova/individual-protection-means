import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
    Autocomplete,
    Button,
    Checkbox,
    createTheme,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Typography
} from "@mui/material";
import SearchComponent from "../../components/Search/Search";
import BtnHome from "../../components/Button/BtnWarehouse";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FilledInput from "@mui/material/FilledInput";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import './NewEmployees.scss'
import Radio from '@mui/material/Radio';

export default function NewEmployees() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [value, setValue] = React.useState('female');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    return (
        <div className='newPerson'>
            <Container className='newPerson__container'>
                <Row>
                    <Col className='' sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col className='newPerson__col2' sm={9}>
                        <div className='newPerson__block1'>
                            <Typography
                                component="h1"
                                variant="h5"
                            >
                                ?????????? ???????????? ????????????????????
                            </Typography>
                            <SearchComponent/>
                        </div>

                        <Box component="form"

                             noValidate
                             autoComplete="off">
                            <div className='newPerson__block2'>
                                <TextField fullWidth id="fullWidth" label="??????????????" variant="outlined"/>
                                <TextField sx={{marginLeft: 2}} fullWidth id="fullWidth" label="??????"
                                           variant="outlined"/>
                            </div>
                            <div className='newPerson__block2'>
                                <TextField sx={{marginRight: 2}} fullWidth label="Email" variant="outlined"
                                           helperText="???????????????????? ?????????????? ???????? email"/>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">??????</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="female" control={<Radio/>} label="??????????????"/>
                                        <FormControlLabel value="male" control={<Radio/>} label="??????????????"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className='newPerson__block2'>
                                <Autocomplete fullWidth
                                              sx={{marginRight: 2}}
                                    // disablePortal
                                              id="combo-box-demo"
                                              options={structuralSubdivision}

                                              renderInput={(params) => <TextField {...params}
                                                                                  label="?????????????????????? ??????????????????????????"/>}
                                />
                                <Autocomplete fullWidth
                                              disablePortal
                                              id="combo-box-demo"
                                              options={position}

                                              renderInput={(params) => <TextField {...params} label="??????????????????"/>}
                                />
                            </div>
                            <div className='newPerson__block2'>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={clothingSize}
                                    sx={{width: 300}}
                                    renderInput={(params) => <TextField {...params} label="???????????? ????????????"/>}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={shoeSize}
                                    sx={{width: 300}}
                                    renderInput={(params) => <TextField {...params} label="???????????? ??????????"/>}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={gloveSize}
                                    sx={{width: 300}}
                                    renderInput={(params) => <TextField {...params} label="???????????? ??????????????"/>}
                                />
                            </div>
                            <div><FormControlLabel control={<Checkbox defaultChecked/>}
                                                   label="???????????????? ???? ?????????????????? ???????????????????????? ????????????"/></div>
                        </Box>
                        <Button variant="contained" fullWidth>??????????????????</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


const structuralSubdivision = [
    {label: '???????????? ???????????????? ????????????????'},
    {label: '???????????? ???????????????????????? ??????????'},
    {label: '???????????? ????????????????????????'},
];
const position = [
    {label: '?????????????? ???? ??????????????????????????'},
    {label: '?????????????? ??????????????'},
    {label: '???????????????????????? ?????????????????? ????????????'},
    {label: '????????????????(?????? ??????????????) ??????????'},
    {label: '?????????????? ??????????????????'},
    {label: '????????????????'},
];
const shoeSize = [
    {label: '37'},
    {label: '38'},
    {label: '39'},
    {label: '40'},
    {label: '41'},
    {label: '42'},
    {label: '43'},
];
const clothingSize = [
    {label: 'S'},
    {label: 'M'},
    {label: 'XL'},
    {label: 'XLL'},
];
const gloveSize = [
    {label: 'S'},
    {label: 'M'},
    {label: 'XL'},
    {label: 'XLL'},
];
