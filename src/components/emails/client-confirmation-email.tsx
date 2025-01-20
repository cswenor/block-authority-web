import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { emailStyles } from './email-styles';
import { ProjectType, projectTypeLabels } from '@/lib/constants';

interface ClientConfirmationEmailProps {
  name: string;
  projectType: ProjectType;
}

export function ClientConfirmationEmail({
  name,
  projectType,
}: ClientConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your consultation request - Block Authority</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Heading style={emailStyles.h1}>Thank You for Your Interest</Heading>
          <Section style={emailStyles.section}>
            <Text style={emailStyles.text}>Dear {name},</Text>
            <Text style={emailStyles.text}>
              Thank you for reaching out about {projectTypeLabels[projectType].toLowerCase()} services. 
              We&apos;ve received your consultation request and our team will review it promptly.
            </Text>
            <Text style={emailStyles.text}>
              What happens next:
            </Text>
            <Text style={emailStyles.text}>
              • Our team will carefully review your project requirements<br />
              • We&apos;ll prepare some initial thoughts and recommendations<br />
              • You&apos;ll hear back from us within 24 hours to schedule a consultation
            </Text>
            <Text style={emailStyles.text}>
              If you have any immediate questions, feel free to reach out to us at support@blockauthority.com
            </Text>
          </Section>
          <Section style={emailStyles.footer}>
            <Text style={emailStyles.smallText}>
              Best regards,<br />
              The Block Authority Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}