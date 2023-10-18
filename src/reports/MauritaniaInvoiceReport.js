import { Grid } from "@material-ui/core";
import { PublishedComponent, TextInput } from "@openimis/fe-core";
import React from "react";
import { useSelector } from "react-redux";

const MauritaniaInvoiceReport = (props) => {
    const { values, setValues } = props;
    const userHealthFacility = useSelector((state) => state.loc.userHealthFacilityFullPath);

    if (userHealthFacility?.code) {
        values.hflocation = userHealthFacility
    };
    console.log(values);
    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <PublishedComponent
                    pubRef="location.LocationPicker"
                    onChange={(location) =>
                        setValues({
                            ...values,
                            location,
                        })
                    }
                    required
                    value={values.location}
                    locationLevel={2}
                />
            </Grid>
            <Grid item>
                <PublishedComponent
                    pubRef="location.HealthFacilityPicker"
                    onChange={(hflocation) =>
                        setValues({
                            ...values,
                            hflocation,
                        })
                    }
                    required
                    value={userHealthFacility?.code ? userHealthFacility.code : values.hflocation}
                />
            </Grid>
            <Grid item>
                <PublishedComponent
                    pubRef="core.DatePicker"
                    value={values.dateFrom}
                    module="mauritania"
                    required
                    label="InvoiceMauritaniaReport.dateFrom"
                    onChange={(dateFrom) => setValues({ ...values, dateFrom })}
                />
            </Grid>
            <Grid item>
                <PublishedComponent
                    pubRef="core.DatePicker"
                    value={values.dateTo}
                    module="mauritania"
                    required
                    label="InvoiceMauritaniaReport.dateTo"
                    onChange={(dateTo) => setValues({ ...values, dateTo })}
                />
            </Grid>
            <Grid item>
                <TextInput
                    pubRef="core.TextInput"
                    value={values.responsible}
                    module="mauritania"
                    required
                    label="InvoiceMauritaniaReport.Responsable"
                    onChange={(responsible) => setValues({ ...values, responsible })}
                />
            </Grid>

        </Grid>
    );

}

export default MauritaniaInvoiceReport;