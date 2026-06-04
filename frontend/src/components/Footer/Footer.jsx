import React from 'react';
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HandHelping,
} from 'lucide-react';
import logo from "../../assets/logo.png"

import {
  socialIcons,
  quickLinks
} from '../../assets/dummyFooter';
import { 
  footerStyles, 
  footerBackgroundStyles, 
  contactIconGradients, 
  iconColors,
  footerCustomStyles 
} from "../../assets/dummyStyles";

const iconMap = {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HandHelping
};

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      {/* Decorative elements: hidden on small screens to avoid overlap and save perf */}
      <div className={footerBackgroundStyles.backgroundContainer}>
        <div className={footerBackgroundStyles.floatingOrb1} />
        <div className={footerBackgroundStyles.floatingOrb2} />
        <div className={footerBackgroundStyles.floatingOrb3} />
        <div className={footerBackgroundStyles.floatingOrb4} />

        {/* subtle grid overlay, reduce opacity on small screens */}
        <div className={footerBackgroundStyles.gridOverlay}>
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className={footerStyles.container}>
        {/* Responsive grid:
            - xs: 1 col
            - sm/md/tablet: 2 cols (md)
            - lg+: 4 cols (unchanged desktop)
        */}
        <div className={footerStyles.grid}>
          <div className={footerStyles.brandSection}>
            <div className={footerStyles.brandTransform}>
              <div className={footerStyles.brandContainer}>
                <div className={footerStyles.brandGradient} />
             
                                              
                                            
                                          
                <div className="relative font-serif flex items-center gap-3">
                    
                  <h3 className={footerStyles.brandTitle}>
                    SmartLearnX
                  </h3>
                </div>
              </div>
              <p className={footerStyles.brandDescription}>
                Transform your learning journey with interactive courses and cutting-edge educational technology designed for modern learners.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${footerStyles.sectionHeader} ${iconColors.cyan}`}>
              <ArrowRight className={footerStyles.sectionIcon} />
              Quick Links
            </h4>
            <ul className={footerStyles.linksList}>
              {quickLinks.map((link, index) => {
                const Icon = iconMap[link.iconKey] || ArrowRight;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${footerStyles.linkItem} ${iconColors.cyan}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <Icon className={`${footerStyles.linkIcon} ${iconColors.cyan}`} />
                      <span className="truncate">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`${footerStyles.sectionHeader} ${iconColors.emerald}`}>
              <Phone className={footerStyles.sectionIcon} />
              Contact Us
            </h4>

            <div className={footerStyles.contactSpace}>
              <div className={footerStyles.contactItem}>
                <div className={`${footerStyles.contactIconContainer} ${contactIconGradients.address}`}>
                  <MapPin className={`${footerStyles.contactIcon} ${iconColors.cyan600}`} />
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>Kattankulathur</p>
                  <p className={footerStyles.contactTextSecondary}>Chennai, Tamil Nadu.</p>
                </div>
              </div>

              <div className={footerStyles.contactItem}>
                <div className={`${footerStyles.contactIconContainer} ${contactIconGradients.phone}`}>
                  <Phone className={`${footerStyles.contactIcon} ${iconColors.purple600}`} />
                </div>

                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>9966277060</p>
                  <p className={footerStyles.contactTextSecondary}>Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              <div className={footerStyles.contactItem}>
                <div className={`${footerStyles.contactIconContainer} ${contactIconGradients.email}`}>
                  <Mail className={`${footerStyles.contactIcon} ${iconColors.emerald600}`} />
                </div>

                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>vramireddy566@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Social / bottom row */}
        <div className={footerStyles.socialSection}>
          <div className={footerStyles.socialContainer}>
            <div className={footerStyles.socialIconsContainer}>
              {socialIcons.map((social, index) => {
                const IconComponent = iconMap[social.iconKey] || Twitter;
                return (
                  <a
                    key={social.name}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={footerStyles.socialIconLink}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* subtle hover overlay only matters on pointer devices */}
                    <div className={`${footerStyles.socialIconContainer} ${social.bgColor}`}>
                      <div className={footerStyles.socialIconInner}>
                        <IconComponent className={footerStyles.socialIcon} />
                      </div>

                      {/* small tooltip on hover for pointer devices; hidden on touch by default */}
                      <div className={footerStyles.socialTooltip}>
                        {social.name}
                        <div className={footerStyles.socialTooltipArrow} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className={footerStyles.designCredit}>
              <div className={footerStyles.designCreditContainer}>
                <div className={footerStyles.designCreditGradient} />
                <p className={footerStyles.designCreditText}>
                  Design by G V Rami Reddy
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{footerCustomStyles}</style>
    </footer>
  );
};

export default Footer;