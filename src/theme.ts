import-{-createTheme,-responsiveFontSizes-}-from-"@mui/material";


let-theme-=-createTheme({
----palette:-{
------primary:-{
--------main:-'#fff',
------},
------secondary:-{
--------main:-'#FF69B4',
------},
----},
----typography:-{
--------fontFamily:-"Helvetica-neue",
----}
--});
theme-=-responsiveFontSizes(theme);

--export-default-theme;