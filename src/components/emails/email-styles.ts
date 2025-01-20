export const emailStyles = {
    main: {
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
    container: {
      margin: '0 auto',
      padding: '20px 0 48px',
      maxWidth: '580px',
    },
    section: {
      padding: '24px',
      backgroundColor: '#f6f9fc',
      borderRadius: '4px',
    },
    text: {
      margin: '16px 0',
      color: '#333',
      fontSize: '14px',
      lineHeight: '24px',
    },
    footer: {
      marginTop: '32px',
      textAlign: 'center' as const,
    },
    smallText: {
      color: '#666',
      fontSize: '12px',
      margin: '12px 0',
    },
    h1: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#111',
      marginBottom: '24px',
    },
    hr: {
      borderColor: '#ddd',
      margin: '20px 0',
    },
  } as const;