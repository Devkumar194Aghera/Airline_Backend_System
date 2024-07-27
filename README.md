/
-src/
index.js //server
models/
controllers/
middlewares/
services/
utils/
config/
repository/
-tests/ [later]



// DB Design
    - Airplane 
    - Airport
    - Flight
    - City

    - Single Airplane can be used for multiple flights so (1: N relationship)
    - Single City can be have multiple airports so (1: N relationship)
    - Multiple flights can be there from single airport so (N:1 relationship)

    - DB relationship : https://lucid.app/lucidchart/40d3f31d-2419-4bf6-8af4-71ec50f7d3bf/edit?beaconFlowId=F3121000318B36D2&invitationId=inv_53a53503-435e-41b2-81cc-1ee173813b48&page=0_0#

    