import { Grid } from "@material-ui/core";
import { PublishedComponent } from "@openimis/fe-core";
import React from "react";

import { useSelector } from "react-redux";

const MauritaniaCardReport = (props) => {
  const { values, setValues } = props;
  const userHealthFacility = useSelector((state) => state.loc.userHealthFacilityFullPath);

  if(userHealthFacility?.code){
    values.hflocation = userHealthFacility
  };
  console.log(values);
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <PublishedComponent
          pubRef="location.HealthFacilityPicker"
          onChange={(hflocation) =>
            setValues({
              ...values,
              hflocation,
            })
          }
          value={userHealthFacility?.code ? userHealthFacility.code : values.hflocation}
        />
      </Grid>
    </Grid>
  );
};


export default MauritaniaCardReport;
