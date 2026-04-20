import React, { useState } from "react";
import {Box, Typography, TextField, Button, Checkbox, FormControlLabel, Divider, IconButton,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const NewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
      <Box
        sx={{width: 400, mx: "auto", mt: 5, p: 4,borderRadius: 3, boxShadow: 3,bgcolor: "#fff", }}
      >
            
             <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              Set new Password
             </Typography>

             <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                     Your new password must be different to previously used passwords.
                   </Typography>
                     <Typography variant="body2" sx={{ fontWeight: 500, mt: 2 }}>
                    password
                     </Typography>
                     <TextField
                     fullWidth
                     margin="dense"
                     type={showPassword ? "text" : "password"}
                     placeholder="create a password"
                     variant="outlined"
                     />
                     <Typography variant="caption" color="text.secondary">
                       Must be at least 8 characters.
                     </Typography>

                     <Typography variant="body2" sx={{ fontWeight: 500, mt: 2 }}>
                       confirm password
                     </Typography>
                     <TextField
                       fullWidth
                       margin="dense"
                       type={showPassword ? "text" : "password"}
                       placeholder="create a password"
                       variant="outlined"
                     />
                     <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                       Update Password
                     </Button>
      </Box>
    );
};

export default NewPassword;           
             
