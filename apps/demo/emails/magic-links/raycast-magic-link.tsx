import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface RaycastMagicLinkEmailProps {
  magicLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const RaycastMagicLinkEmail = ({
  magicLink,
}: RaycastMagicLinkEmailProps) => (
  <Html>
    <Head />
    <title>magic lin - Marca Milionária</title>
    <style>
      body {{
        background-color: #1a1a1a;
        color: #ffffff;
        font-family: Arial, sans-serif;
      }}
      .container {{
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }}
      .header {{
        text-align: center;
        padding: 20px 0;
        border-bottom: 2px solid #ffd700;
      }}
      .content {{
        padding: 30px 0;
      }}
      .button {{
        background-color: #ffd700;
        color: #1a1a1a;
        padding: 15px 30px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
        margin: 20px 0;
      }}
      .footer {{
        text-align: center;
        padding-top: 20px;
        border-top: 1px solid #333;
        color: #888;
      }}
      .gold-text {{
        color: #ffd700;
      }}
      .verification-code {{
        background: #333;
        padding: 20px;
        text-align: center;
        margin: 20px 0;
        font-size: 24px;
        letter-spacing: 5px;
        color: #ffd700;
      }}
    </style>
    <Body style={main}>
      <Preview>Log in with this magic link.</Preview>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/raycast-logo.png`}
          width={48}
          height={48}
          alt="Raycast"
        />
        <Heading style={heading}>🪄 Your magic link</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            <Link style={link} href={magicLink}>
              👉 Click here to sign in 👈
            </Link>
          </Text>
          <Text style={paragraph}>
            If you didn't request this, please ignore this email.
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />- Raycast Team
        </Text>
        <Hr style={hr} />
        <Img
          src={`${baseUrl}/static/raycast-logo.png`}
          width={32}
          height={32}
          style={{
            WebkitFilter: 'grayscale(100%)',
            filter: 'grayscale(100%)',
            margin: '20px 0',
          }}
        />
        <Text style={footer}>Raycast Technologies Inc.</Text>
        <Text style={footer}>
          2093 Philadelphia Pike #3222, Claymont, DE 19703
        </Text>
      </Container>
    </Body>
  </Html>
);

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: 'https://raycast.com',
} as RaycastMagicLinkEmailProps;

export default RaycastMagicLinkEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/static/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const body = {
  margin: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const link = {
  color: '#FF6363',
};

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
};
