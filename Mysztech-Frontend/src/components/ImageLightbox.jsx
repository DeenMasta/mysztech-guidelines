import { Box, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageLightbox = ({ image, onClose, isDarkMode = false }) => (
  <Dialog
    open={Boolean(image)}
    onClose={onClose}
    maxWidth={false}
    aria-label="Image preview"
    PaperProps={{
      sx: {
        m: { xs: 1, sm: 3 },
        width: 'fit-content',
        maxWidth: 'calc(100vw - 16px)',
        overflow: 'hidden',
        bgcolor: isDarkMode ? '#18181b' : '#ffffff',
      },
    }}
  >
    <IconButton
      aria-label="Close image preview"
      onClick={onClose}
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        color: '#ffffff',
        bgcolor: 'rgba(0, 0, 0, 0.56)',
        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.76)' },
      }}
    >
      <CloseIcon />
    </IconButton>

    {image && (
      <Box
        component="img"
        src={image.src}
        alt={image.alt || 'Expanded guide image'}
        sx={{
          display: 'block',
          width: 'auto',
          maxWidth: '100%',
          height: 'auto',
          maxHeight: 'calc(100vh - 24px)',
          objectFit: 'contain',
        }}
      />
    )}
  </Dialog>
);

export default ImageLightbox;
