export const formatSocialMediaProfile = (profile: string) => {
  if (!profile) return;

  const socialMediaProfile = `https://instagram.com/${profile.replace(
    '@',
    '',
  )}`;
  return socialMediaProfile;
};
