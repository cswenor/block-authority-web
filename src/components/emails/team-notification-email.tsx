import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { emailStyles } from './email-styles';
import { ProjectType, projectTypeLabels } from '@/lib/constants';

interface TeamNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: ProjectType;
  message: string;
}

export function TeamNotificationEmail({
  name,
  email,
  phone,
  company,
  projectType,
  message,
}: TeamNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New consultation request from {name}</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Heading style={emailStyles.h1}>New Consultation Request</Heading>
          <Section style={emailStyles.section}>
            <Text style={emailStyles.text}><strong>Name:</strong> {name}</Text>
            <Text style={emailStyles.text}><strong>Email:</strong> {email}</Text>
            {phone && (
              <Text style={emailStyles.text}><strong>Phone:</strong> {phone}</Text>
            )}
            {company && (
              <Text style={emailStyles.text}><strong>Company:</strong> {company}</Text>
            )}
            <Text style={emailStyles.text}><strong>Project Type:</strong> {projectTypeLabels[projectType]}</Text>
            <Hr style={emailStyles.hr} />
            <Text style={emailStyles.text}><strong>Message:</strong></Text>
            <Text style={emailStyles.text}>{message}</Text>
          </Section>
          <Section style={emailStyles.footer}>
            <Text style={emailStyles.smallText}>
              This consultation request was submitted via blockauthority.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}